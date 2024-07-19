/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

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

/**
 * RygelServer-2.6
 */

export namespace RygelServer {
    enum LogicalOperator {
        AND,
        OR,
    }
    enum ObjectEventType {
        ADDED,
        MODIFIED,
        DELETED,
    }
    enum SerializerType {
        GENERIC_DIDL,
        DIDL_S,
        M3UEXT,
    }
    class WritableContainerError extends GLib.Error {
        static $gtype: GObject.GType<WritableContainerError>;

        // Static fields of RygelServer.WritableContainerError

        static NOT_IMPLEMENTED: number;

        // Constructors of RygelServer.WritableContainerError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    class MediaEngineError extends GLib.Error {
        static $gtype: GObject.GType<MediaEngineError>;

        // Static fields of RygelServer.MediaEngineError

        static NOT_FOUND: number;

        // Constructors of RygelServer.MediaEngineError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    class HTTPSeekRequestError extends GLib.Error {
        static $gtype: GObject.GType<HTTPSeekRequestError>;

        // Static fields of RygelServer.HTTPSeekRequestError

        static INVALID_RANGE: number;
        static BAD_REQUEST: number;
        static OUT_OF_RANGE: number;

        // Constructors of RygelServer.HTTPSeekRequestError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    class DataSourceError extends GLib.Error {
        static $gtype: GObject.GType<DataSourceError>;

        // Static fields of RygelServer.DataSourceError

        static GENERAL: number;
        static SEEK_FAILED: number;
        static PLAYSPEED_FAILED: number;

        // Constructors of RygelServer.DataSourceError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    class HTTPRequestError extends GLib.Error {
        static $gtype: GObject.GType<HTTPRequestError>;

        // Static fields of RygelServer.HTTPRequestError

        static UNACCEPTABLE: number;
        static BAD_REQUEST: number;
        static NOT_FOUND: number;
        static INTERNAL_SERVER_ERROR: number;

        // Constructors of RygelServer.HTTPRequestError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    class PlaySpeedError extends GLib.Error {
        static $gtype: GObject.GType<PlaySpeedError>;

        // Static fields of RygelServer.PlaySpeedError

        static INVALID_SPEED_FORMAT: number;
        static SPEED_NOT_PRESENT: number;

        // Constructors of RygelServer.PlaySpeedError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    module AudioItem {
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

    class AudioItem extends MediaFileItem {
        static $gtype: GObject.GType<AudioItem>;

        // Own properties of RygelServer.AudioItem

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

        // Constructors of RygelServer.AudioItem

        constructor(properties?: Partial<AudioItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, parent: MediaContainer, title: string, upnp_class: string): AudioItem;

        // Own methods of RygelServer.AudioItem

        get_duration(): number;
        set_duration(value: number): void;
        get_bitrate(): number;
        set_bitrate(value: number): void;
        get_sample_freq(): number;
        set_sample_freq(value: number): void;
        get_bits_per_sample(): number;
        set_bits_per_sample(value: number): void;
        get_channels(): number;
        set_channels(value: number): void;
        get_album(): string;
        set_album(value: string): void;
    }

    module ImageItem {
        // Constructor properties interface

        interface ConstructorProps extends MediaFileItem.ConstructorProps, VisualItem.ConstructorProps {}
    }

    class ImageItem extends MediaFileItem implements VisualItem {
        static $gtype: GObject.GType<ImageItem>;

        // Constructors of RygelServer.ImageItem

        constructor(properties?: Partial<ImageItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, parent: MediaContainer, title: string, upnp_class: string): ImageItem;

        // Inherited properties
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

        // Inherited methods
        get_width(): number;
        set_width(value: number): void;
        get_height(): number;
        set_height(value: number): void;
        get_color_depth(): number;
        set_color_depth(value: number): void;
        get_thumbnails(): Gee.ArrayList;
        set_thumbnails(value: Gee.ArrayList): void;
        vfunc_get_width(): number;
        vfunc_set_width(value: number): void;
        vfunc_get_height(): number;
        vfunc_set_height(value: number): void;
        vfunc_get_color_depth(): number;
        vfunc_set_color_depth(value: number): void;
        vfunc_get_thumbnails(): Gee.ArrayList;
        vfunc_set_thumbnails(value: Gee.ArrayList): void;
        get_primary_resource(): MediaResource;
        get_extension(): string;
        ext_from_mime_type(mime_type: string): string;
        add_engine_resources(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        add_engine_resources_finish(_res_: Gio.AsyncResult): void;
        add_additional_resources(server: HTTPServer): void;
        get_mime_type(): string;
        set_mime_type(value: string): void;
        get_dlna_profile(): string;
        set_dlna_profile(value: string): void;
        get_size(): number;
        set_size(value: number): void;
        get_place_holder(): boolean;
        set_place_holder(value: boolean): void;
        vfunc_get_primary_resource(): MediaResource;
        vfunc_get_extension(): string;
        vfunc_add_engine_resources(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_add_engine_resources_finish(_res_: Gio.AsyncResult): void;
        vfunc_add_additional_resources(server: HTTPServer): void;
    }

    class LogicalExpression extends SearchExpression {
        static $gtype: GObject.GType<LogicalExpression>;

        // Constructors of RygelServer.LogicalExpression

        _init(...args: any[]): void;

        static ['new'](): LogicalExpression;
    }

    module MediaArtStore {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class MediaArtStore extends GObject.Object {
        static $gtype: GObject.GType<MediaArtStore>;

        // Constructors of RygelServer.MediaArtStore

        constructor(properties?: Partial<MediaArtStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of RygelServer.MediaArtStore

        static get_default(): MediaArtStore | null;

        // Own methods of RygelServer.MediaArtStore

        lookup_media_art(item: MusicItem): Thumbnail | null;
        add(item: MusicItem, file: Gio.File, data: Uint8Array | string, mime: string): void;
        search_media_art_for_file(item: MusicItem, file: Gio.File): void;
    }

    module MediaObjects {
        // Constructor properties interface

        interface ConstructorProps extends Gee.ArrayList.ConstructorProps {}
    }

    class MediaObjects extends Gee.ArrayList {
        static $gtype: GObject.GType<MediaObjects>;

        // Constructors of RygelServer.MediaObjects

        constructor(properties?: Partial<MediaObjects.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MediaObjects;

        // Own methods of RygelServer.MediaObjects

        sort_by_criteria(sort_criteria: string): void;
    }

    module MusicItem {
        // Constructor properties interface

        interface ConstructorProps extends AudioItem.ConstructorProps {
            track_number: number;
            trackNumber: number;
            album_art: Thumbnail;
            albumArt: Thumbnail;
        }
    }

    class MusicItem extends AudioItem {
        static $gtype: GObject.GType<MusicItem>;

        // Own properties of RygelServer.MusicItem

        get track_number(): number;
        set track_number(val: number);
        get trackNumber(): number;
        set trackNumber(val: number);
        get album_art(): Thumbnail;
        set album_art(val: Thumbnail);
        get albumArt(): Thumbnail;
        set albumArt(val: Thumbnail);

        // Constructors of RygelServer.MusicItem

        constructor(properties?: Partial<MusicItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, parent: MediaContainer, title: string, upnp_class: string): MusicItem;

        // Own methods of RygelServer.MusicItem

        lookup_album_art(): void;
        get_track_number(): number;
        set_track_number(value: number): void;
        get_album_art(): Thumbnail;
        set_album_art(value: Thumbnail): void;
    }

    module PhotoItem {
        // Constructor properties interface

        interface ConstructorProps extends ImageItem.ConstructorProps {}
    }

    class PhotoItem extends ImageItem {
        static $gtype: GObject.GType<PhotoItem>;

        // Constructors of RygelServer.PhotoItem

        constructor(properties?: Partial<PhotoItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, parent: MediaContainer, title: string, upnp_class: string): PhotoItem;
    }

    class RelationalExpression extends SearchExpression {
        static $gtype: GObject.GType<RelationalExpression>;

        // Constructors of RygelServer.RelationalExpression

        _init(...args: any[]): void;

        static ['new'](): RelationalExpression;

        // Own methods of RygelServer.RelationalExpression

        compare_string(str?: string | null): boolean;
        compare_int(integer: number): boolean;
        compare_uint(integer: number): boolean;
    }

    module SimpleContainer {
        // Constructor properties interface

        interface ConstructorProps extends MediaContainer.ConstructorProps, SearchableContainer.ConstructorProps {}
    }

    class SimpleContainer extends MediaContainer implements SearchableContainer {
        static $gtype: GObject.GType<SimpleContainer>;

        // Own fields of RygelServer.SimpleContainer

        children: MediaObjects;

        // Constructors of RygelServer.SimpleContainer

        constructor(properties?: Partial<SimpleContainer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, parent: MediaContainer | null, title: string): SimpleContainer;

        static root(title: string): SimpleContainer;

        // Own methods of RygelServer.SimpleContainer

        add_child_item(child: MediaItem): void;
        get_all_children(): MediaObjects;
        add_child_container(child: MediaContainer): void;
        remove_child(child: MediaObject): void;
        clear(): void;
        is_child_id_unique(child_id: string): boolean;

        // Inherited properties
        get search_classes(): Gee.ArrayList;
        set search_classes(val: Gee.ArrayList);
        get searchClasses(): Gee.ArrayList;
        set searchClasses(val: Gee.ArrayList);
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

        // Inherited methods
        search(
            expression: SearchExpression | null,
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        search_finish(_res_: Gio.AsyncResult): [MediaObjects | null, number];
        simple_search(
            expression: SearchExpression | null,
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        simple_search_finish(_res_: Gio.AsyncResult): [MediaObjects | null, number];
        find_object(
            id: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        find_object_finish(_res_: Gio.AsyncResult): MediaObject | null;
        get_search_classes(): Gee.ArrayList;
        set_search_classes(value: Gee.ArrayList): void;
        vfunc_search(
            expression: SearchExpression | null,
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_search_finish(_res_: Gio.AsyncResult): [MediaObjects | null, number];
        vfunc_get_search_classes(): Gee.ArrayList;
        vfunc_set_search_classes(value: Gee.ArrayList): void;
        get_children(
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null;
        updated(object: MediaObject | null, event_type: ObjectEventType, sub_tree_update: boolean): void;
        get_child_count(): number;
        set_child_count(value: number): void;
        get_empty_child_count(): number;
        set_empty_child_count(value: number): void;
        get_all_child_count(): number;
        get_create_mode_enabled(): boolean;
        set_create_mode_enabled(value: boolean): void;
        get_sort_criteria(): string;
        set_sort_criteria(value: string): void;
        vfunc_get_children(
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null;
        vfunc_find_object(
            id: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_find_object_finish(_res_: Gio.AsyncResult): MediaObject | null;
    }

    class Subtitle {
        static $gtype: GObject.GType<Subtitle>;

        // Own fields of RygelServer.Subtitle

        ref_count: number;
        uri: string;
        mime_type: string;
        caption_type: string;
        file_extension: string;
        size: number;

        // Constructors of RygelServer.Subtitle

        _init(...args: any[]): void;

        static ['new'](mime_type: string, caption_type: string, file_extension: string): Subtitle;

        // Own virtual methods of RygelServer.Subtitle

        vfunc_get_resource(protocol: string, index: number): MediaResource;

        // Own methods of RygelServer.Subtitle

        get_resource(protocol: string, index: number): MediaResource;
    }

    class Thumbnail extends RygelCore.IconInfo {
        static $gtype: GObject.GType<Thumbnail>;

        // Own fields of RygelServer.Thumbnail

        dlna_profile: string;

        // Constructors of RygelServer.Thumbnail

        _init(...args: any[]): void;

        static ['new'](mime_type: string, dlna_profile: string, file_extension: string): Thumbnail;
        // Conflicted with RygelCore.IconInfo.new

        static ['new'](...args: never[]): any;

        // Own virtual methods of RygelServer.Thumbnail

        vfunc_get_resource(protocol: string, index: number): MediaResource;

        // Own methods of RygelServer.Thumbnail

        get_resource(protocol: string, index: number): MediaResource;
    }

    module VideoItem {
        // Constructor properties interface

        interface ConstructorProps extends AudioItem.ConstructorProps, VisualItem.ConstructorProps {
            author: string;
            subtitles: Gee.ArrayList;
        }
    }

    class VideoItem extends AudioItem implements VisualItem {
        static $gtype: GObject.GType<VideoItem>;

        // Own properties of RygelServer.VideoItem

        get author(): string;
        set author(val: string);
        get subtitles(): Gee.ArrayList;
        set subtitles(val: Gee.ArrayList);

        // Constructors of RygelServer.VideoItem

        constructor(properties?: Partial<VideoItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, parent: MediaContainer, title: string, upnp_class: string): VideoItem;

        // Own virtual methods of RygelServer.VideoItem

        vfunc_add_subtitle_resources(http_server: HTTPServer): void;

        // Own methods of RygelServer.VideoItem

        add_subtitle_resources(http_server: HTTPServer): void;
        get_author(): string;
        set_author(value: string): void;
        get_subtitles(): Gee.ArrayList;
        set_subtitles(value: Gee.ArrayList): void;

        // Inherited properties
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

        // Inherited methods
        get_width(): number;
        set_width(value: number): void;
        get_height(): number;
        set_height(value: number): void;
        get_color_depth(): number;
        set_color_depth(value: number): void;
        get_thumbnails(): Gee.ArrayList;
        set_thumbnails(value: Gee.ArrayList): void;
        vfunc_get_width(): number;
        vfunc_set_width(value: number): void;
        vfunc_get_height(): number;
        vfunc_set_height(value: number): void;
        vfunc_get_color_depth(): number;
        vfunc_set_color_depth(value: number): void;
        vfunc_get_thumbnails(): Gee.ArrayList;
        vfunc_set_thumbnails(value: Gee.ArrayList): void;
        get_primary_resource(): MediaResource;
        get_extension(): string;
        ext_from_mime_type(mime_type: string): string;
        add_engine_resources(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        add_engine_resources_finish(_res_: Gio.AsyncResult): void;
        add_additional_resources(server: HTTPServer): void;
        get_mime_type(): string;
        set_mime_type(value: string): void;
        get_dlna_profile(): string;
        set_dlna_profile(value: string): void;
        get_size(): number;
        set_size(value: number): void;
        get_place_holder(): boolean;
        set_place_holder(value: boolean): void;
        vfunc_get_primary_resource(): MediaResource;
        vfunc_get_extension(): string;
        vfunc_add_engine_resources(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_add_engine_resources_finish(_res_: Gio.AsyncResult): void;
        vfunc_add_additional_resources(server: HTTPServer): void;
    }

    module MediaContainer {
        // Signal callback interfaces

        interface ContainerUpdated {
            (
                container: MediaContainer,
                object: MediaObject,
                event_type: ObjectEventType,
                sub_tree_update: boolean,
            ): void;
        }

        interface SubTreeUpdatesFinished {
            (sub_tree_root: MediaObject): void;
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

    abstract class MediaContainer extends MediaObject {
        static $gtype: GObject.GType<MediaContainer>;

        // Own properties of RygelServer.MediaContainer

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

        // Own fields of RygelServer.MediaContainer

        update_id: number;
        storage_used: number;
        total_deleted_child_count: number;

        // Constructors of RygelServer.MediaContainer

        constructor(properties?: Partial<MediaContainer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of RygelServer.MediaContainer

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'container-updated',
            callback: (
                _source: this,
                container: MediaContainer,
                object: MediaObject,
                event_type: ObjectEventType,
                sub_tree_update: boolean,
            ) => void,
        ): number;
        connect_after(
            signal: 'container-updated',
            callback: (
                _source: this,
                container: MediaContainer,
                object: MediaObject,
                event_type: ObjectEventType,
                sub_tree_update: boolean,
            ) => void,
        ): number;
        emit(
            signal: 'container-updated',
            container: MediaContainer,
            object: MediaObject,
            event_type: ObjectEventType,
            sub_tree_update: boolean,
        ): void;
        connect(
            signal: 'sub-tree-updates-finished',
            callback: (_source: this, sub_tree_root: MediaObject) => void,
        ): number;
        connect_after(
            signal: 'sub-tree-updates-finished',
            callback: (_source: this, sub_tree_root: MediaObject) => void,
        ): number;
        emit(signal: 'sub-tree-updates-finished', sub_tree_root: MediaObject): void;

        // Own static methods of RygelServer.MediaContainer

        static equal_func(a: MediaContainer, b: MediaContainer): boolean;

        // Own virtual methods of RygelServer.MediaContainer

        vfunc_get_children(
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null;
        vfunc_find_object(
            id: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_find_object_finish(_res_: Gio.AsyncResult): MediaObject | null;

        // Own methods of RygelServer.MediaContainer

        get_children(
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        get_children_finish(_res_: Gio.AsyncResult): MediaObjects | null;
        find_object(
            id: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        find_object_finish(_res_: Gio.AsyncResult): MediaObject | null;
        updated(object: MediaObject | null, event_type: ObjectEventType, sub_tree_update: boolean): void;
        get_child_count(): number;
        set_child_count(value: number): void;
        get_empty_child_count(): number;
        set_empty_child_count(value: number): void;
        get_all_child_count(): number;
        get_create_mode_enabled(): boolean;
        set_create_mode_enabled(value: boolean): void;
        get_sort_criteria(): string;
        set_sort_criteria(value: string): void;
    }

    module MediaItem {
        // Constructor properties interface

        interface ConstructorProps extends MediaObject.ConstructorProps {
            description: string;
        }
    }

    abstract class MediaItem extends MediaObject {
        static $gtype: GObject.GType<MediaItem>;

        // Own properties of RygelServer.MediaItem

        get description(): string;
        set description(val: string);

        // Constructors of RygelServer.MediaItem

        constructor(properties?: Partial<MediaItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of RygelServer.MediaItem

        get_description(): string;
        set_description(value: string): void;
    }

    module MediaFileItem {
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

    abstract class MediaFileItem extends MediaItem {
        static $gtype: GObject.GType<MediaFileItem>;

        // Own properties of RygelServer.MediaFileItem

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

        // Own fields of RygelServer.MediaFileItem

        rygel_media_file_item_mime_to_ext: Gee.HashMap;

        // Constructors of RygelServer.MediaFileItem

        constructor(properties?: Partial<MediaFileItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of RygelServer.MediaFileItem

        vfunc_get_primary_resource(): MediaResource;
        vfunc_get_extension(): string;
        vfunc_add_engine_resources(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_add_engine_resources_finish(_res_: Gio.AsyncResult): void;
        vfunc_add_additional_resources(server: HTTPServer): void;

        // Own methods of RygelServer.MediaFileItem

        get_primary_resource(): MediaResource;
        get_extension(): string;
        ext_from_mime_type(mime_type: string): string;
        add_engine_resources(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        add_engine_resources_finish(_res_: Gio.AsyncResult): void;
        add_additional_resources(server: HTTPServer): void;
        get_mime_type(): string;
        set_mime_type(value: string): void;
        get_dlna_profile(): string;
        set_dlna_profile(value: string): void;
        get_size(): number;
        set_size(value: number): void;
        get_place_holder(): boolean;
        set_place_holder(value: boolean): void;
    }

    module MediaObject {
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

    abstract class MediaObject extends GObject.Object {
        static $gtype: GObject.GType<MediaObject>;

        // Own properties of RygelServer.MediaObject

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

        // Own fields of RygelServer.MediaObject

        parent_ptr: MediaContainer;

        // Constructors of RygelServer.MediaObject

        constructor(properties?: Partial<MediaObject.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of RygelServer.MediaObject

        static apply_replacements(
            replacement_pairs: { [key: string]: any } | GLib.HashTable<string, string>,
            source_string?: string | null,
        ): string | null;

        // Own virtual methods of RygelServer.MediaObject

        vfunc_add_uri(uri: string): void;
        vfunc_serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null;
        vfunc_create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null;
        vfunc_apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void;
        vfunc_compare_by_property(media_object: MediaObject, property: string): number;
        vfunc_get_ocm_flags(): GUPnPAV.OCMFlags;

        // Own methods of RygelServer.MediaObject

        get_uris(): Gee.List;
        get_primary_uri(): string | null;
        add_uri(uri: string): void;
        get_writable(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        get_writable_finish(_res_: Gio.AsyncResult): Gio.File | null;
        get_writables(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        get_writables_finish(_res_: Gio.AsyncResult): Gee.ArrayList;
        get_resource_list(): Gee.List;
        get_resource_by_name(resource_name: string): MediaResource | null;
        serialize(serializer: Serializer, http_server: HTTPServer): GUPnPAV.DIDLLiteObject | null;
        serialize_resource_list(didl_object: GUPnPAV.DIDLLiteObject, http_server: HTTPServer): void;
        create_stream_source_for_resource(request: HTTPRequest, resource: MediaResource): DataSource | null;
        apply_didl_lite(didl_object: GUPnPAV.DIDLLiteObject): void;
        compare_by_property(media_object: MediaObject, property: string): number;
        compare_string_props(prop1: string, prop2: string): number;
        compare_int_props(prop1: number, prop2: number): number;
        get_id(): string;
        set_id(value: string): void;
        get_ref_id(): string;
        set_ref_id(value: string): void;
        get_upnp_class(): string;
        set_upnp_class(value: string): void;
        get_date(): string;
        set_date(value: string): void;
        get_creator(): string;
        set_creator(value: string): void;
        get_modified(): number;
        set_modified(value: number): void;
        get_object_update_id(): number;
        set_object_update_id(value: number): void;
        get_artist(): string;
        set_artist(value: string): void;
        get_genre(): string;
        set_genre(value: string): void;
        get_parent(): MediaContainer;
        set_parent(value: MediaContainer): void;
        get_parent_ref(): MediaContainer;
        set_parent_ref(value: MediaContainer): void;
        get_title(): string;
        set_title(value: string): void;
        get_ocm_flags(): GUPnPAV.OCMFlags;
    }

    module MediaResource {
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

    class MediaResource extends GObject.Object {
        static $gtype: GObject.GType<MediaResource>;

        // Own properties of RygelServer.MediaResource

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

        // Own fields of RygelServer.MediaResource

        play_speeds: string[];
        play_speeds_length1: number;

        // Constructors of RygelServer.MediaResource

        constructor(properties?: Partial<MediaResource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): MediaResource;

        static from_resource(name: string, that: MediaResource): MediaResource;

        static from_didl_lite_resource(name: string, didl_resource: GUPnPAV.DIDLLiteResource): MediaResource;

        // Own methods of RygelServer.MediaResource

        dup(): MediaResource;
        get_name(): string;
        serialize(
            didl_resource: GUPnPAV.DIDLLiteResource,
            replacements?: GLib.HashTable<string, string> | null,
        ): GUPnPAV.DIDLLiteResource;
        set_protocol_info(pi: GUPnPAV.ProtocolInfo): void;
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
        supports_transfer_mode(transfer_mode: string): boolean;
        is_streamable(): boolean;
        is_cleartext_range_support_enabled(): boolean;
        supports_playspeed(): boolean;
        is_dlna_protocol_flag_set(flags: number): boolean;
        is_dlna_operation_mode_set(flags: number): boolean;
        to_string(): string;
        get_uri(): string;
        set_uri(value: string): void;
        get_import_uri(): string;
        set_import_uri(value: string): void;
        get_extension(): string;
        set_extension(value: string): void;
        get_size(): number;
        set_size(value: number): void;
        get_cleartext_size(): number;
        set_cleartext_size(value: number): void;
        get_duration(): number;
        set_duration(value: number): void;
        get_bitrate(): number;
        set_bitrate(value: number): void;
        get_bits_per_sample(): number;
        set_bits_per_sample(value: number): void;
        get_color_depth(): number;
        set_color_depth(value: number): void;
        get_width(): number;
        set_width(value: number): void;
        get_height(): number;
        set_height(value: number): void;
        get_audio_channels(): number;
        set_audio_channels(value: number): void;
        get_sample_freq(): number;
        set_sample_freq(value: number): void;
        get_protocol(): string;
        set_protocol(value: string): void;
        get_mime_type(): string;
        set_mime_type(value: string): void;
        get_dlna_profile(): string;
        set_dlna_profile(value: string): void;
        get_network(): string;
        set_network(value: string): void;
        get_dlna_conversion(): GUPnPAV.DLNAConversion;
        set_dlna_conversion(value: GUPnPAV.DLNAConversion): void;
        get_dlna_flags(): GUPnPAV.DLNAFlags;
        set_dlna_flags(value: GUPnPAV.DLNAFlags): void;
        get_dlna_operation(): GUPnPAV.DLNAOperation;
        set_dlna_operation(value: GUPnPAV.DLNAOperation): void;
    }

    module MediaServerPlugin {
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

    abstract class MediaServerPlugin extends RygelCore.Plugin {
        static $gtype: GObject.GType<MediaServerPlugin>;

        // Own properties of RygelServer.MediaServerPlugin

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

        // Constructors of RygelServer.MediaServerPlugin

        constructor(properties?: Partial<MediaServerPlugin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of RygelServer.MediaServerPlugin

        vfunc_get_search_caps(): string;

        // Own methods of RygelServer.MediaServerPlugin

        get_root_container(): MediaContainer;
        get_search_caps(): string;
        get_upload_profiles(): RygelCore.DLNAProfile[];
        set_upload_profiles(value: RygelCore.DLNAProfile[]): void;
        get_supported_profiles(): RygelCore.DLNAProfile[];
        set_supported_profiles(value: RygelCore.DLNAProfile[]): void;
    }

    abstract class SearchExpression {
        static $gtype: GObject.GType<SearchExpression>;

        // Own fields of RygelServer.SearchExpression

        ref_count: number;
        op: any | null;
        operand1: any | null;
        operand2: any | null;

        // Constructors of RygelServer.SearchExpression

        _init(...args: any[]): void;

        // Own virtual methods of RygelServer.SearchExpression

        vfunc_satisfied_by(media_object: MediaObject): boolean;
        vfunc_to_string(): string;

        // Own methods of RygelServer.SearchExpression

        satisfied_by(media_object: MediaObject): boolean;
        to_string(): string;
    }

    module MediaServer {
        // Constructor properties interface

        interface ConstructorProps extends RygelCore.MediaDevice.ConstructorProps {
            root_container: MediaContainer;
            rootContainer: MediaContainer;
        }
    }

    class MediaServer extends RygelCore.MediaDevice {
        static $gtype: GObject.GType<MediaServer>;

        // Own properties of RygelServer.MediaServer

        get root_container(): MediaContainer;
        get rootContainer(): MediaContainer;

        // Constructors of RygelServer.MediaServer

        constructor(properties?: Partial<MediaServer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            title: string,
            root_container: MediaContainer,
            capabilities: RygelCore.PluginCapabilities,
        ): MediaServer;
    }

    module MediaEngine {
        // Signal callback interfaces

        interface ResourceChanged {
            (media_object_uri: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class MediaEngine extends GObject.Object {
        static $gtype: GObject.GType<MediaEngine>;

        // Constructors of RygelServer.MediaEngine

        constructor(properties?: Partial<MediaEngine.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of RygelServer.MediaEngine

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'resource-changed', callback: (_source: this, media_object_uri: string) => void): number;
        connect_after(signal: 'resource-changed', callback: (_source: this, media_object_uri: string) => void): number;
        emit(signal: 'resource-changed', media_object_uri: string): void;

        // Own static methods of RygelServer.MediaEngine

        static init(): void;
        static get_default(): MediaEngine;

        // Own virtual methods of RygelServer.MediaEngine

        vfunc_get_dlna_profiles(): RygelCore.DLNAProfile[];
        vfunc_get_resources_for_item(item: MediaObject, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_get_resources_for_item_finish(_res_: Gio.AsyncResult): Gee.List | null;
        vfunc_create_data_source_for_resource(
            item: MediaObject,
            resource: MediaResource,
            replacements: { [key: string]: any } | GLib.HashTable<string, string>,
        ): DataSource | null;
        vfunc_create_data_source_for_uri(uri: string): DataSource | null;
        vfunc_get_internal_protocol_schemes(): string[];

        // Own methods of RygelServer.MediaEngine

        get_dlna_profiles(): RygelCore.DLNAProfile[];
        get_resources_for_item(item: MediaObject, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        get_resources_for_item_finish(_res_: Gio.AsyncResult): Gee.List | null;
        create_data_source_for_resource(
            item: MediaObject,
            resource: MediaResource,
            replacements: { [key: string]: any } | GLib.HashTable<string, string>,
        ): DataSource | null;
        create_data_source_for_uri(uri: string): DataSource | null;
        get_internal_protocol_schemes(): string[];
    }

    module HTTPSeekRequest {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class HTTPSeekRequest extends GObject.Object {
        static $gtype: GObject.GType<HTTPSeekRequest>;

        // Constructors of RygelServer.HTTPSeekRequest

        constructor(properties?: Partial<HTTPSeekRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module PlaylistItem {
        // Constructor properties interface

        interface ConstructorProps extends MediaFileItem.ConstructorProps {}
    }

    class PlaylistItem extends MediaFileItem {
        static $gtype: GObject.GType<PlaylistItem>;

        // Constructors of RygelServer.PlaylistItem

        constructor(properties?: Partial<PlaylistItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, parent: MediaContainer, title: string, upnp_class: string): PlaylistItem;
    }

    module ContentDirectory {
        // Constructor properties interface

        interface ConstructorProps extends GUPnP.Service.ConstructorProps {}
    }

    class ContentDirectory extends GUPnP.Service {
        static $gtype: GObject.GType<ContentDirectory>;

        // Own fields of RygelServer.ContentDirectory

        feature_list: string;
        http_server: HTTPServer;
        root_container: MediaContainer;
        cancellable: Gio.Cancellable;
        system_update_id: number;

        // Constructors of RygelServer.ContentDirectory

        constructor(properties?: Partial<ContentDirectory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ContentDirectory;
    }

    module HTTPByteSeekRequest {
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

    class HTTPByteSeekRequest extends HTTPSeekRequest {
        static $gtype: GObject.GType<HTTPByteSeekRequest>;

        // Own properties of RygelServer.HTTPByteSeekRequest

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

        // Constructors of RygelServer.HTTPByteSeekRequest

        constructor(properties?: Partial<HTTPByteSeekRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](msg: Soup.Message, handler: HTTPGetHandler): HTTPByteSeekRequest;

        // Own static methods of RygelServer.HTTPByteSeekRequest

        static supported(message: Soup.Message, handler: HTTPGetHandler): boolean;
        static requested(msg: Soup.Message): boolean;

        // Own methods of RygelServer.HTTPByteSeekRequest

        get_start_byte(): number;
        set_start_byte(value: number): void;
        get_end_byte(): number;
        set_end_byte(value: number): void;
        get_range_length(): number;
        get_total_size(): number;
        set_total_size(value: number): void;
    }

    module HTTPByteSeekResponse {
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

    class HTTPByteSeekResponse extends HTTPResponseElement {
        static $gtype: GObject.GType<HTTPByteSeekResponse>;

        // Own properties of RygelServer.HTTPByteSeekResponse

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

        // Constructors of RygelServer.HTTPByteSeekResponse

        constructor(properties?: Partial<HTTPByteSeekResponse.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](start_byte: number, end_byte: number, total_size: number): HTTPByteSeekResponse;

        static from_request(request: HTTPByteSeekRequest): HTTPByteSeekResponse;

        // Own methods of RygelServer.HTTPByteSeekResponse

        get_start_byte(): number;
        set_start_byte(value: number): void;
        get_end_byte(): number;
        set_end_byte(value: number): void;
        get_range_length(): number;
        get_total_size(): number;
        set_total_size(value: number): void;
    }

    module HTTPGetHandler {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cancellable: Gio.Cancellable;
        }
    }

    abstract class HTTPGetHandler extends GObject.Object {
        static $gtype: GObject.GType<HTTPGetHandler>;

        // Own properties of RygelServer.HTTPGetHandler

        get cancellable(): Gio.Cancellable;
        set cancellable(val: Gio.Cancellable);

        // Constructors of RygelServer.HTTPGetHandler

        constructor(properties?: Partial<HTTPGetHandler.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of RygelServer.HTTPGetHandler

        vfunc_add_response_headers(request: HTTPGet): void;
        vfunc_get_default_transfer_mode(): string;
        vfunc_supports_transfer_mode(mode: string): boolean;
        vfunc_get_resource_size(): number;
        vfunc_get_resource_duration(): number;
        vfunc_supports_byte_seek(): boolean;
        vfunc_supports_time_seek(): boolean;
        vfunc_supports_playspeed(): boolean;
        vfunc_render_body(request: HTTPGet): HTTPResponse;

        // Own methods of RygelServer.HTTPGetHandler

        add_response_headers(request: HTTPGet): void;
        get_default_transfer_mode(): string;
        supports_transfer_mode(mode: string): boolean;
        get_resource_size(): number;
        get_resource_duration(): number;
        supports_byte_seek(): boolean;
        supports_time_seek(): boolean;
        supports_playspeed(): boolean;
        render_body(request: HTTPGet): HTTPResponse;
        get_cancellable(): Gio.Cancellable;
        set_cancellable(value: Gio.Cancellable): void;
    }

    module HTTPGet {
        // Constructor properties interface

        interface ConstructorProps extends HTTPRequest.ConstructorProps {}
    }

    class HTTPGet extends HTTPRequest {
        static $gtype: GObject.GType<HTTPGet>;

        // Own fields of RygelServer.HTTPGet

        seek: HTTPSeekRequest;
        speed_request: PlaySpeedRequest;
        handler: HTTPGetHandler;

        // Constructors of RygelServer.HTTPGet

        constructor(properties?: Partial<HTTPGet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](http_server: HTTPServer, server: Soup.Server, msg: Soup.Message): HTTPGet;
    }

    module HTTPItemURI {
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

    class HTTPItemURI extends GObject.Object {
        static $gtype: GObject.GType<HTTPItemURI>;

        // Own properties of RygelServer.HTTPItemURI

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

        // Own fields of RygelServer.HTTPItemURI

        rygel_http_item_uri_mime_to_ext: Gee.HashMap;

        // Constructors of RygelServer.HTTPItemURI

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

        // Own methods of RygelServer.HTTPItemURI

        to_string(): string;
        get_item_id(): string;
        set_item_id(value: string): void;
        get_thumbnail_index(): number;
        set_thumbnail_index(value: number): void;
        get_subtitle_index(): number;
        set_subtitle_index(value: number): void;
        get_resource_name(): string | null;
        set_resource_name(value?: string | null): void;
        get_http_server(): HTTPServer;
        set_http_server(value: HTTPServer): void;
        get_extension(): string;
        set_extension(value: string): void;
    }

    module HTTPRequest {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, RygelCore.StateMachine.ConstructorProps {}
    }

    abstract class HTTPRequest extends GObject.Object implements RygelCore.StateMachine {
        static $gtype: GObject.GType<HTTPRequest>;

        // Own fields of RygelServer.HTTPRequest

        http_server: HTTPServer;
        server: Soup.Server;
        msg: Soup.Message;
        uri: HTTPItemURI;
        object: MediaObject;
        hack: never;

        // Constructors of RygelServer.HTTPRequest

        constructor(properties?: Partial<HTTPRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of RygelServer.HTTPRequest

        vfunc_handle(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_handle_finish(_res_: Gio.AsyncResult): void;
        vfunc_find_item(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_find_item_finish(_res_: Gio.AsyncResult): void;

        // Own methods of RygelServer.HTTPRequest

        handle(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        handle_finish(_res_: Gio.AsyncResult): void;
        find_item(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        find_item_finish(_res_: Gio.AsyncResult): void;
        handle_error(_error_: GLib.Error): void;
        end(status: number, reason?: string | null): void;

        // Inherited properties
        get cancellable(): Gio.Cancellable;
        set cancellable(val: Gio.Cancellable);

        // Inherited methods
        run(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        run_finish(_res_: Gio.AsyncResult): void;
        get_cancellable(): Gio.Cancellable;
        set_cancellable(value: Gio.Cancellable): void;
        vfunc_run(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_run_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_cancellable(): Gio.Cancellable;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module HTTPResponse {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, RygelCore.StateMachine.ConstructorProps {
            server: Soup.Server;
            priority: number;
        }
    }

    class HTTPResponse extends GObject.Object implements RygelCore.StateMachine {
        static $gtype: GObject.GType<HTTPResponse>;

        // Own properties of RygelServer.HTTPResponse

        get server(): Soup.Server;
        set server(val: Soup.Server);
        get priority(): number;

        // Own fields of RygelServer.HTTPResponse

        msg: Soup.Message;
        seek: HTTPSeekRequest;
        speed: PlaySpeedRequest;

        // Constructors of RygelServer.HTTPResponse

        constructor(properties?: Partial<HTTPResponse.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](request: HTTPGet, request_handler: HTTPGetHandler, src: DataSource): HTTPResponse;

        // Own virtual methods of RygelServer.HTTPResponse

        vfunc_end(aborted: boolean, status: number): void;

        // Own methods of RygelServer.HTTPResponse

        preroll(): Gee.List | null;
        end(aborted: boolean, status: number): void;
        get_server(): Soup.Server;
        get_priority(): number;

        // Inherited properties
        get cancellable(): Gio.Cancellable;
        set cancellable(val: Gio.Cancellable);

        // Inherited methods
        run(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        run_finish(_res_: Gio.AsyncResult): void;
        get_cancellable(): Gio.Cancellable;
        set_cancellable(value: Gio.Cancellable): void;
        vfunc_run(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_run_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_cancellable(): Gio.Cancellable;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module HTTPResponseElement {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class HTTPResponseElement extends GObject.Object {
        static $gtype: GObject.GType<HTTPResponseElement>;

        // Constructors of RygelServer.HTTPResponseElement

        constructor(properties?: Partial<HTTPResponseElement.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of RygelServer.HTTPResponseElement

        vfunc_add_response_headers(request: HTTPRequest): void;
        vfunc_to_string(): string;

        // Own methods of RygelServer.HTTPResponseElement

        add_response_headers(request: HTTPRequest): void;
        to_string(): string;
    }

    module HTTPServer {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, RygelCore.StateMachine.ConstructorProps {
            path_root: string;
            pathRoot: string;
            server_name: string;
            serverName: string;
        }
    }

    class HTTPServer extends GObject.Object implements RygelCore.StateMachine {
        static $gtype: GObject.GType<HTTPServer>;

        // Own properties of RygelServer.HTTPServer

        get path_root(): string;
        set path_root(val: string);
        get pathRoot(): string;
        set pathRoot(val: string);
        get server_name(): string;
        set server_name(val: string);
        get serverName(): string;
        set serverName(val: string);

        // Own fields of RygelServer.HTTPServer

        root_container: MediaContainer;
        context: GUPnP.Context;

        // Constructors of RygelServer.HTTPServer

        constructor(properties?: Partial<HTTPServer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](content_dir: ContentDirectory, name: string): HTTPServer;

        // Own virtual methods of RygelServer.HTTPServer

        vfunc_get_protocol(): string;
        vfunc_get_protocol_info(): Gee.ArrayList;

        // Own methods of RygelServer.HTTPServer

        set_resource_delivery_options(res: MediaResource): void;
        need_proxy(uri: string): boolean;
        get_protocol(): string;
        get_protocol_info(): Gee.ArrayList;
        get_replacements(): GLib.HashTable<string, string>;
        is_local(): boolean;
        get_path_root(): string;
        get_server_name(): string;
        set_server_name(value: string): void;

        // Inherited properties
        get cancellable(): Gio.Cancellable;
        set cancellable(val: Gio.Cancellable);

        // Inherited methods
        run(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        run_finish(_res_: Gio.AsyncResult): void;
        get_cancellable(): Gio.Cancellable;
        set_cancellable(value: Gio.Cancellable): void;
        vfunc_run(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_run_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_cancellable(): Gio.Cancellable;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module HTTPTimeSeekRequest {
        // Constructor properties interface

        interface ConstructorProps extends HTTPSeekRequest.ConstructorProps {}
    }

    class HTTPTimeSeekRequest extends HTTPSeekRequest {
        static $gtype: GObject.GType<HTTPTimeSeekRequest>;

        // Own fields of RygelServer.HTTPTimeSeekRequest

        start_time: number;
        end_time: number;
        range_duration: number;
        total_duration: number;

        // Constructors of RygelServer.HTTPTimeSeekRequest

        constructor(properties?: Partial<HTTPTimeSeekRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of RygelServer.HTTPTimeSeekRequest

        static supported(message: Soup.Message, handler: HTTPGetHandler): boolean;
        static requested(message: Soup.Message): boolean;

        // Own methods of RygelServer.HTTPTimeSeekRequest

        to_string(): string;
    }

    module HTTPTimeSeekResponse {
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

    class HTTPTimeSeekResponse extends HTTPResponseElement {
        static $gtype: GObject.GType<HTTPTimeSeekResponse>;

        // Own properties of RygelServer.HTTPTimeSeekResponse

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

        // Constructors of RygelServer.HTTPTimeSeekResponse

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

        // Own methods of RygelServer.HTTPTimeSeekResponse

        get_start_time(): number;
        get_end_time(): number;
        get_range_duration(): number;
        get_total_duration(): number;
        get_start_byte(): number;
        get_end_byte(): number;
        get_response_length(): number;
        get_total_size(): number;
    }

    module Serializer {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            serializer_type: SerializerType;
            serializerType: SerializerType;
        }
    }

    class Serializer extends GObject.Object {
        static $gtype: GObject.GType<Serializer>;

        // Own properties of RygelServer.Serializer

        get serializer_type(): SerializerType;
        get serializerType(): SerializerType;

        // Constructors of RygelServer.Serializer

        constructor(properties?: Partial<Serializer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type: SerializerType): Serializer;

        // Own methods of RygelServer.Serializer

        add_item(): GUPnPAV.DIDLLiteItem | null;
        add_container(): GUPnPAV.DIDLLiteContainer | null;
        filter(filter_string: string): void;
        get_string(): string;
    }

    class PlaySpeed {
        static $gtype: GObject.GType<PlaySpeed>;

        // Own fields of RygelServer.PlaySpeed

        ref_count: number;
        numerator: number;
        denominator: number;

        // Constructors of RygelServer.PlaySpeed

        _init(...args: any[]): void;

        static ['new'](numerator: number, denominator: number): PlaySpeed;

        static from_string(speed: string): PlaySpeed;

        // Own methods of RygelServer.PlaySpeed

        equals(that: PlaySpeed): boolean;
        is_positive(): boolean;
        is_normal_rate(): boolean;
        to_string(): string;
        to_float(): number;
        to_double(): number;
    }

    module PlaySpeedRequest {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            speed: PlaySpeed;
        }
    }

    class PlaySpeedRequest extends GObject.Object {
        static $gtype: GObject.GType<PlaySpeedRequest>;

        // Own properties of RygelServer.PlaySpeedRequest

        get speed(): PlaySpeed;
        set speed(val: PlaySpeed);

        // Constructors of RygelServer.PlaySpeedRequest

        constructor(properties?: Partial<PlaySpeedRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](numerator: number, denominator: number): PlaySpeedRequest;

        static from_string(speed: string): PlaySpeedRequest;

        // Own static methods of RygelServer.PlaySpeedRequest

        static supported(request: HTTPGet): boolean;

        // Own methods of RygelServer.PlaySpeedRequest

        equals(that: PlaySpeedRequest): boolean;
        get_speed(): PlaySpeed;
    }

    module PlaySpeedResponse {
        // Constructor properties interface

        interface ConstructorProps extends HTTPResponseElement.ConstructorProps {}
    }

    class PlaySpeedResponse extends HTTPResponseElement {
        static $gtype: GObject.GType<PlaySpeedResponse>;

        // Own fields of RygelServer.PlaySpeedResponse

        framerate: number;

        // Constructors of RygelServer.PlaySpeedResponse

        constructor(properties?: Partial<PlaySpeedResponse.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](numerator: number, denominator: number, framerate: number): PlaySpeedResponse;

        static from_speed(speed: PlaySpeed, framerate: number): PlaySpeedResponse;

        static from_string(speed: string, framerate: number): PlaySpeedResponse;

        // Own methods of RygelServer.PlaySpeedResponse

        equals(that: PlaySpeedRequest): boolean;
    }

    module DTCPCleartextRequest {
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

    class DTCPCleartextRequest extends HTTPSeekRequest {
        static $gtype: GObject.GType<DTCPCleartextRequest>;

        // Own properties of RygelServer.DTCPCleartextRequest

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

        // Constructors of RygelServer.DTCPCleartextRequest

        constructor(properties?: Partial<DTCPCleartextRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](message: Soup.Message, handler: HTTPGetHandler): DTCPCleartextRequest;

        // Own static methods of RygelServer.DTCPCleartextRequest

        static supported(message: Soup.Message, handler: HTTPGetHandler): boolean;
        static requested(message: Soup.Message): boolean;

        // Own methods of RygelServer.DTCPCleartextRequest

        get_start_byte(): number;
        get_end_byte(): number;
        get_range_length(): number;
        get_total_size(): number;
    }

    module DTCPCleartextResponse {
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

    class DTCPCleartextResponse extends HTTPResponseElement {
        static $gtype: GObject.GType<DTCPCleartextResponse>;

        // Own properties of RygelServer.DTCPCleartextResponse

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

        // Constructors of RygelServer.DTCPCleartextResponse

        constructor(properties?: Partial<DTCPCleartextResponse.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            start_byte: number,
            end_byte: number,
            total_size: number,
            encrypted_length: number,
        ): DTCPCleartextResponse;

        static from_request(request: DTCPCleartextRequest, encrypted_length: number): DTCPCleartextResponse;

        // Own methods of RygelServer.DTCPCleartextResponse

        get_start_byte(): number;
        get_end_byte(): number;
        get_range_length(): number;
        get_total_size(): number;
        get_encrypted_length(): number;
        set_encrypted_length(value: number): void;
    }

    module DLNAAvailableSeekRangeRequest {
        // Constructor properties interface

        interface ConstructorProps extends HTTPSeekRequest.ConstructorProps {}
    }

    class DLNAAvailableSeekRangeRequest extends HTTPSeekRequest {
        static $gtype: GObject.GType<DLNAAvailableSeekRangeRequest>;

        // Constructors of RygelServer.DLNAAvailableSeekRangeRequest

        constructor(properties?: Partial<DLNAAvailableSeekRangeRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of RygelServer.DLNAAvailableSeekRangeRequest

        static supported(message: Soup.Message, handler: HTTPGetHandler): boolean;
        static requested(message: Soup.Message): boolean;
    }

    module DLNAAvailableSeekRangeResponse {
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

    class DLNAAvailableSeekRangeResponse extends HTTPResponseElement {
        static $gtype: GObject.GType<DLNAAvailableSeekRangeResponse>;

        // Own properties of RygelServer.DLNAAvailableSeekRangeResponse

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

        // Constructors of RygelServer.DLNAAvailableSeekRangeResponse

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

        // Own methods of RygelServer.DLNAAvailableSeekRangeResponse

        get_mode(): number;
        get_start_time(): number;
        get_end_time(): number;
        get_start_byte(): number;
        get_end_byte(): number;
        get_range_length(): number;
    }

    type AudioItemClass = typeof AudioItem;
    abstract class AudioItemPrivate {
        static $gtype: GObject.GType<AudioItemPrivate>;

        // Constructors of RygelServer.AudioItemPrivate

        _init(...args: any[]): void;
    }

    type ImageItemClass = typeof ImageItem;
    abstract class ImageItemPrivate {
        static $gtype: GObject.GType<ImageItemPrivate>;

        // Constructors of RygelServer.ImageItemPrivate

        _init(...args: any[]): void;
    }

    type LogicalExpressionClass = typeof LogicalExpression;
    abstract class LogicalExpressionPrivate {
        static $gtype: GObject.GType<LogicalExpressionPrivate>;

        // Constructors of RygelServer.LogicalExpressionPrivate

        _init(...args: any[]): void;
    }

    type MediaArtStoreClass = typeof MediaArtStore;
    abstract class MediaArtStorePrivate {
        static $gtype: GObject.GType<MediaArtStorePrivate>;

        // Constructors of RygelServer.MediaArtStorePrivate

        _init(...args: any[]): void;
    }

    type MediaObjectsClass = typeof MediaObjects;
    abstract class MediaObjectsPrivate {
        static $gtype: GObject.GType<MediaObjectsPrivate>;

        // Constructors of RygelServer.MediaObjectsPrivate

        _init(...args: any[]): void;
    }

    type MusicItemClass = typeof MusicItem;
    abstract class MusicItemPrivate {
        static $gtype: GObject.GType<MusicItemPrivate>;

        // Constructors of RygelServer.MusicItemPrivate

        _init(...args: any[]): void;
    }

    type PhotoItemClass = typeof PhotoItem;
    abstract class PhotoItemPrivate {
        static $gtype: GObject.GType<PhotoItemPrivate>;

        // Constructors of RygelServer.PhotoItemPrivate

        _init(...args: any[]): void;
    }

    type RelationalExpressionClass = typeof RelationalExpression;
    abstract class RelationalExpressionPrivate {
        static $gtype: GObject.GType<RelationalExpressionPrivate>;

        // Constructors of RygelServer.RelationalExpressionPrivate

        _init(...args: any[]): void;
    }

    type SimpleContainerClass = typeof SimpleContainer;
    abstract class SimpleContainerPrivate {
        static $gtype: GObject.GType<SimpleContainerPrivate>;

        // Constructors of RygelServer.SimpleContainerPrivate

        _init(...args: any[]): void;
    }

    type SubtitleClass = typeof Subtitle;
    abstract class SubtitlePrivate {
        static $gtype: GObject.GType<SubtitlePrivate>;

        // Constructors of RygelServer.SubtitlePrivate

        _init(...args: any[]): void;
    }

    type ThumbnailClass = typeof Thumbnail;
    abstract class ThumbnailPrivate {
        static $gtype: GObject.GType<ThumbnailPrivate>;

        // Constructors of RygelServer.ThumbnailPrivate

        _init(...args: any[]): void;
    }

    type VideoItemClass = typeof VideoItem;
    abstract class VideoItemPrivate {
        static $gtype: GObject.GType<VideoItemPrivate>;

        // Constructors of RygelServer.VideoItemPrivate

        _init(...args: any[]): void;
    }

    type MediaContainerClass = typeof MediaContainer;
    abstract class MediaContainerPrivate {
        static $gtype: GObject.GType<MediaContainerPrivate>;

        // Constructors of RygelServer.MediaContainerPrivate

        _init(...args: any[]): void;
    }

    type MediaItemClass = typeof MediaItem;
    abstract class MediaItemPrivate {
        static $gtype: GObject.GType<MediaItemPrivate>;

        // Constructors of RygelServer.MediaItemPrivate

        _init(...args: any[]): void;
    }

    type MediaFileItemClass = typeof MediaFileItem;
    abstract class MediaFileItemPrivate {
        static $gtype: GObject.GType<MediaFileItemPrivate>;

        // Constructors of RygelServer.MediaFileItemPrivate

        _init(...args: any[]): void;
    }

    type MediaObjectClass = typeof MediaObject;
    abstract class MediaObjectPrivate {
        static $gtype: GObject.GType<MediaObjectPrivate>;

        // Constructors of RygelServer.MediaObjectPrivate

        _init(...args: any[]): void;
    }

    type MediaResourceClass = typeof MediaResource;
    abstract class MediaResourcePrivate {
        static $gtype: GObject.GType<MediaResourcePrivate>;

        // Constructors of RygelServer.MediaResourcePrivate

        _init(...args: any[]): void;
    }

    type MediaServerPluginClass = typeof MediaServerPlugin;
    abstract class MediaServerPluginPrivate {
        static $gtype: GObject.GType<MediaServerPluginPrivate>;

        // Constructors of RygelServer.MediaServerPluginPrivate

        _init(...args: any[]): void;
    }

    type SearchExpressionClass = typeof SearchExpression;
    abstract class SearchExpressionPrivate {
        static $gtype: GObject.GType<SearchExpressionPrivate>;

        // Constructors of RygelServer.SearchExpressionPrivate

        _init(...args: any[]): void;
    }

    type MediaServerClass = typeof MediaServer;
    abstract class MediaServerPrivate {
        static $gtype: GObject.GType<MediaServerPrivate>;

        // Constructors of RygelServer.MediaServerPrivate

        _init(...args: any[]): void;
    }

    type MediaEngineClass = typeof MediaEngine;
    abstract class MediaEnginePrivate {
        static $gtype: GObject.GType<MediaEnginePrivate>;

        // Constructors of RygelServer.MediaEnginePrivate

        _init(...args: any[]): void;
    }

    type HTTPSeekRequestClass = typeof HTTPSeekRequest;
    abstract class HTTPSeekRequestPrivate {
        static $gtype: GObject.GType<HTTPSeekRequestPrivate>;

        // Constructors of RygelServer.HTTPSeekRequestPrivate

        _init(...args: any[]): void;
    }

    type PlaylistItemClass = typeof PlaylistItem;
    abstract class PlaylistItemPrivate {
        static $gtype: GObject.GType<PlaylistItemPrivate>;

        // Constructors of RygelServer.PlaylistItemPrivate

        _init(...args: any[]): void;
    }

    type ContentDirectoryClass = typeof ContentDirectory;
    abstract class ContentDirectoryPrivate {
        static $gtype: GObject.GType<ContentDirectoryPrivate>;

        // Constructors of RygelServer.ContentDirectoryPrivate

        _init(...args: any[]): void;
    }

    type HTTPByteSeekRequestClass = typeof HTTPByteSeekRequest;
    abstract class HTTPByteSeekRequestPrivate {
        static $gtype: GObject.GType<HTTPByteSeekRequestPrivate>;

        // Constructors of RygelServer.HTTPByteSeekRequestPrivate

        _init(...args: any[]): void;
    }

    type HTTPByteSeekResponseClass = typeof HTTPByteSeekResponse;
    abstract class HTTPByteSeekResponsePrivate {
        static $gtype: GObject.GType<HTTPByteSeekResponsePrivate>;

        // Constructors of RygelServer.HTTPByteSeekResponsePrivate

        _init(...args: any[]): void;
    }

    type HTTPGetHandlerClass = typeof HTTPGetHandler;
    abstract class HTTPGetHandlerPrivate {
        static $gtype: GObject.GType<HTTPGetHandlerPrivate>;

        // Constructors of RygelServer.HTTPGetHandlerPrivate

        _init(...args: any[]): void;
    }

    type HTTPGetClass = typeof HTTPGet;
    abstract class HTTPGetPrivate {
        static $gtype: GObject.GType<HTTPGetPrivate>;

        // Constructors of RygelServer.HTTPGetPrivate

        _init(...args: any[]): void;
    }

    type HTTPItemURIClass = typeof HTTPItemURI;
    abstract class HTTPItemURIPrivate {
        static $gtype: GObject.GType<HTTPItemURIPrivate>;

        // Constructors of RygelServer.HTTPItemURIPrivate

        _init(...args: any[]): void;
    }

    type HTTPRequestClass = typeof HTTPRequest;
    abstract class HTTPRequestPrivate {
        static $gtype: GObject.GType<HTTPRequestPrivate>;

        // Constructors of RygelServer.HTTPRequestPrivate

        _init(...args: any[]): void;
    }

    type HTTPResponseClass = typeof HTTPResponse;
    abstract class HTTPResponsePrivate {
        static $gtype: GObject.GType<HTTPResponsePrivate>;

        // Constructors of RygelServer.HTTPResponsePrivate

        _init(...args: any[]): void;
    }

    type HTTPResponseElementClass = typeof HTTPResponseElement;
    abstract class HTTPResponseElementPrivate {
        static $gtype: GObject.GType<HTTPResponseElementPrivate>;

        // Constructors of RygelServer.HTTPResponseElementPrivate

        _init(...args: any[]): void;
    }

    type HTTPServerClass = typeof HTTPServer;
    abstract class HTTPServerPrivate {
        static $gtype: GObject.GType<HTTPServerPrivate>;

        // Constructors of RygelServer.HTTPServerPrivate

        _init(...args: any[]): void;
    }

    type HTTPTimeSeekRequestClass = typeof HTTPTimeSeekRequest;
    abstract class HTTPTimeSeekRequestPrivate {
        static $gtype: GObject.GType<HTTPTimeSeekRequestPrivate>;

        // Constructors of RygelServer.HTTPTimeSeekRequestPrivate

        _init(...args: any[]): void;
    }

    type HTTPTimeSeekResponseClass = typeof HTTPTimeSeekResponse;
    abstract class HTTPTimeSeekResponsePrivate {
        static $gtype: GObject.GType<HTTPTimeSeekResponsePrivate>;

        // Constructors of RygelServer.HTTPTimeSeekResponsePrivate

        _init(...args: any[]): void;
    }

    type SerializerClass = typeof Serializer;
    abstract class SerializerPrivate {
        static $gtype: GObject.GType<SerializerPrivate>;

        // Constructors of RygelServer.SerializerPrivate

        _init(...args: any[]): void;
    }

    type PlaySpeedClass = typeof PlaySpeed;
    abstract class PlaySpeedPrivate {
        static $gtype: GObject.GType<PlaySpeedPrivate>;

        // Constructors of RygelServer.PlaySpeedPrivate

        _init(...args: any[]): void;
    }

    type PlaySpeedRequestClass = typeof PlaySpeedRequest;
    abstract class PlaySpeedRequestPrivate {
        static $gtype: GObject.GType<PlaySpeedRequestPrivate>;

        // Constructors of RygelServer.PlaySpeedRequestPrivate

        _init(...args: any[]): void;
    }

    type PlaySpeedResponseClass = typeof PlaySpeedResponse;
    abstract class PlaySpeedResponsePrivate {
        static $gtype: GObject.GType<PlaySpeedResponsePrivate>;

        // Constructors of RygelServer.PlaySpeedResponsePrivate

        _init(...args: any[]): void;
    }

    type DTCPCleartextRequestClass = typeof DTCPCleartextRequest;
    abstract class DTCPCleartextRequestPrivate {
        static $gtype: GObject.GType<DTCPCleartextRequestPrivate>;

        // Constructors of RygelServer.DTCPCleartextRequestPrivate

        _init(...args: any[]): void;
    }

    type DTCPCleartextResponseClass = typeof DTCPCleartextResponse;
    abstract class DTCPCleartextResponsePrivate {
        static $gtype: GObject.GType<DTCPCleartextResponsePrivate>;

        // Constructors of RygelServer.DTCPCleartextResponsePrivate

        _init(...args: any[]): void;
    }

    type DLNAAvailableSeekRangeRequestClass = typeof DLNAAvailableSeekRangeRequest;
    abstract class DLNAAvailableSeekRangeRequestPrivate {
        static $gtype: GObject.GType<DLNAAvailableSeekRangeRequestPrivate>;

        // Constructors of RygelServer.DLNAAvailableSeekRangeRequestPrivate

        _init(...args: any[]): void;
    }

    type DLNAAvailableSeekRangeResponseClass = typeof DLNAAvailableSeekRangeResponse;
    abstract class DLNAAvailableSeekRangeResponsePrivate {
        static $gtype: GObject.GType<DLNAAvailableSeekRangeResponsePrivate>;

        // Constructors of RygelServer.DLNAAvailableSeekRangeResponsePrivate

        _init(...args: any[]): void;
    }

    type SearchableContainerIface = typeof SearchableContainer;
    type TrackableContainerIface = typeof TrackableContainer;
    type TrackableItemIface = typeof TrackableItem;
    type VisualItemIface = typeof VisualItem;
    type WritableContainerIface = typeof WritableContainer;
    type DataSourceIface = typeof DataSource;
    type UpdatableObjectIface = typeof UpdatableObject;
    module SearchableContainer {
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
    interface SearchableContainer extends MediaContainer {
        // Own properties of RygelServer.SearchableContainer

        get search_classes(): Gee.ArrayList;
        set search_classes(val: Gee.ArrayList);
        get searchClasses(): Gee.ArrayList;
        set searchClasses(val: Gee.ArrayList);

        // Own methods of RygelServer.SearchableContainer

        search(
            expression: SearchExpression | null,
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        search_finish(_res_: Gio.AsyncResult): [MediaObjects | null, number];
        simple_search(
            expression: SearchExpression | null,
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        simple_search_finish(_res_: Gio.AsyncResult): [MediaObjects | null, number];
        find_object(
            id: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        find_object_finish(_res_: Gio.AsyncResult): MediaObject | null;
        get_search_classes(): Gee.ArrayList;
        set_search_classes(value: Gee.ArrayList): void;

        // Own virtual methods of RygelServer.SearchableContainer

        vfunc_search(
            expression: SearchExpression | null,
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_search_finish(_res_: Gio.AsyncResult): [MediaObjects | null, number];
        vfunc_get_search_classes(): Gee.ArrayList;
        vfunc_set_search_classes(value: Gee.ArrayList): void;
    }

    export const SearchableContainer: SearchableContainerNamespace;

    module TrackableContainer {
        // Constructor properties interface

        interface ConstructorProps extends MediaContainer.ConstructorProps {}
    }

    export interface TrackableContainerNamespace {
        $gtype: GObject.GType<TrackableContainer>;
        prototype: TrackableContainer;
    }
    interface TrackableContainer extends MediaContainer {
        // Own methods of RygelServer.TrackableContainer

        clear(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        clear_finish(_res_: Gio.AsyncResult): void;
        add_child(object: MediaObject, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        add_child_finish(_res_: Gio.AsyncResult): void;
        add_child_tracked(object: MediaObject, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        add_child_tracked_finish(_res_: Gio.AsyncResult): void;
        remove_child(object: MediaObject, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        remove_child_finish(_res_: Gio.AsyncResult): void;
        remove_child_tracked(object: MediaObject, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        remove_child_tracked_finish(_res_: Gio.AsyncResult): void;
        get_service_reset_token(): string;
        set_service_reset_token(token: string): void;
        get_system_update_id(): number;

        // Own virtual methods of RygelServer.TrackableContainer

        vfunc_add_child(object: MediaObject, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_add_child_finish(_res_: Gio.AsyncResult): void;
        vfunc_remove_child(object: MediaObject, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_remove_child_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_service_reset_token(): string;
        vfunc_set_service_reset_token(token: string): void;
        vfunc_get_system_update_id(): number;
    }

    export const TrackableContainer: TrackableContainerNamespace;

    module TrackableItem {
        // Constructor properties interface

        interface ConstructorProps extends MediaItem.ConstructorProps {}
    }

    export interface TrackableItemNamespace {
        $gtype: GObject.GType<TrackableItem>;
        prototype: TrackableItem;
    }
    interface TrackableItem extends MediaItem {
        // Own methods of RygelServer.TrackableItem

        changed(): void;
    }

    export const TrackableItem: TrackableItemNamespace;

    module VisualItem {
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
    interface VisualItem extends MediaFileItem {
        // Own properties of RygelServer.VisualItem

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

        // Own methods of RygelServer.VisualItem

        get_width(): number;
        set_width(value: number): void;
        get_height(): number;
        set_height(value: number): void;
        get_color_depth(): number;
        set_color_depth(value: number): void;
        get_thumbnails(): Gee.ArrayList;
        set_thumbnails(value: Gee.ArrayList): void;

        // Own virtual methods of RygelServer.VisualItem

        vfunc_get_width(): number;
        vfunc_set_width(value: number): void;
        vfunc_get_height(): number;
        vfunc_set_height(value: number): void;
        vfunc_get_color_depth(): number;
        vfunc_set_color_depth(value: number): void;
        vfunc_get_thumbnails(): Gee.ArrayList;
        vfunc_set_thumbnails(value: Gee.ArrayList): void;
    }

    export const VisualItem: VisualItemNamespace;

    module WritableContainer {
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
    interface WritableContainer extends MediaContainer {
        // Own properties of RygelServer.WritableContainer

        get create_classes(): Gee.ArrayList;
        set create_classes(val: Gee.ArrayList);
        get createClasses(): Gee.ArrayList;
        set createClasses(val: Gee.ArrayList);

        // Own methods of RygelServer.WritableContainer

        can_create(upnp_class: string): boolean;
        add_item(
            item: MediaFileItem,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        add_item_finish(_res_: Gio.AsyncResult): void;
        add_container(
            container: MediaContainer,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        add_container_finish(_res_: Gio.AsyncResult): void;
        add_reference(
            object: MediaObject,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        add_reference_finish(_res_: Gio.AsyncResult): string;
        remove_item(
            id: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        remove_item_finish(_res_: Gio.AsyncResult): void;
        remove_container(
            id: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        remove_container_finish(_res_: Gio.AsyncResult): void;
        get_create_classes(): Gee.ArrayList;
        set_create_classes(value: Gee.ArrayList): void;

        // Own virtual methods of RygelServer.WritableContainer

        vfunc_add_item(
            item: MediaFileItem,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_add_item_finish(_res_: Gio.AsyncResult): void;
        vfunc_add_container(
            container: MediaContainer,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_add_container_finish(_res_: Gio.AsyncResult): void;
        vfunc_add_reference(
            object: MediaObject,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_add_reference_finish(_res_: Gio.AsyncResult): string;
        vfunc_remove_item(
            id: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_remove_item_finish(_res_: Gio.AsyncResult): void;
        vfunc_remove_container(
            id: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_remove_container_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_create_classes(): Gee.ArrayList;
        vfunc_set_create_classes(value: Gee.ArrayList): void;
    }

    export const WritableContainer: WritableContainerNamespace;

    module DataSource {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DataSourceNamespace {
        $gtype: GObject.GType<DataSource>;
        prototype: DataSource;
    }
    interface DataSource extends GObject.Object {
        // Own methods of RygelServer.DataSource

        preroll(seek?: HTTPSeekRequest | null, playspeed?: PlaySpeedRequest | null): Gee.List | null;
        start(): void;
        freeze(): void;
        thaw(): void;
        stop(): void;

        // Own virtual methods of RygelServer.DataSource

        vfunc_preroll(seek?: HTTPSeekRequest | null, playspeed?: PlaySpeedRequest | null): Gee.List | null;
        vfunc_start(): void;
        vfunc_freeze(): void;
        vfunc_thaw(): void;
        vfunc_stop(): void;
    }

    export const DataSource: DataSourceNamespace;

    module UpdatableObject {
        // Constructor properties interface

        interface ConstructorProps extends MediaObject.ConstructorProps {}
    }

    export interface UpdatableObjectNamespace {
        $gtype: GObject.GType<UpdatableObject>;
        prototype: UpdatableObject;
    }
    interface UpdatableObject extends MediaObject {
        // Own methods of RygelServer.UpdatableObject

        commit(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        commit_finish(_res_: Gio.AsyncResult): void;

        // Own virtual methods of RygelServer.UpdatableObject

        vfunc_commit(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_commit_finish(_res_: Gio.AsyncResult): void;
    }

    export const UpdatableObject: UpdatableObjectNamespace;

    // Workaround
    /** @ignore */
    interface IconInfo extends RygelCore.IconInfo {}
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
