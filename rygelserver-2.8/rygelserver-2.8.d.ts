/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './rygelserver-2.8-ambient.d.ts';
import './rygelserver-2.8-import.d.ts';
/**
 * RygelServer-2.8
 */

import type RygelCore from '@girs/rygelcore-2.8';
import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GUPnP from '@girs/gupnp-1.6';
import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-3.0';
import type GSSDP from '@girs/gssdp-1.6';
import type GUPnPAV from '@girs/gupnpav-1.0';

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
        // Own fields of RygelServer-2.8.WritableContainerError

        NOT_IMPLEMENTED: number;

        // Constructors of RygelServer-2.8.WritableContainerError

        constructor(options: { message: string; code: number });
    }

    class MediaEngineError extends GLib.Error {
        // Own fields of RygelServer-2.8.MediaEngineError

        NOT_FOUND: number;

        // Constructors of RygelServer-2.8.MediaEngineError

        constructor(options: { message: string; code: number });
    }

    class HTTPSeekRequestError extends GLib.Error {
        // Own fields of RygelServer-2.8.HTTPSeekRequestError

        INVALID_RANGE: number;
        BAD_REQUEST: number;
        OUT_OF_RANGE: number;

        // Constructors of RygelServer-2.8.HTTPSeekRequestError

        constructor(options: { message: string; code: number });
    }

    class DataSourceError extends GLib.Error {
        // Own fields of RygelServer-2.8.DataSourceError

        GENERAL: number;
        SEEK_FAILED: number;
        PLAYSPEED_FAILED: number;

        // Constructors of RygelServer-2.8.DataSourceError

        constructor(options: { message: string; code: number });
    }

    class HTTPRequestError extends GLib.Error {
        // Own fields of RygelServer-2.8.HTTPRequestError

        UNACCEPTABLE: number;
        BAD_REQUEST: number;
        NOT_FOUND: number;
        INTERNAL_SERVER_ERROR: number;

        // Constructors of RygelServer-2.8.HTTPRequestError

        constructor(options: { message: string; code: number });
    }

    class PlaySpeedError extends GLib.Error {
        // Own fields of RygelServer-2.8.PlaySpeedError

        INVALID_SPEED_FORMAT: number;
        SPEED_NOT_PRESENT: number;

        // Constructors of RygelServer-2.8.PlaySpeedError

        constructor(options: { message: string; code: number });
    }

    module AudioItem {
        // Constructor properties interface
    }

    class AudioItem extends MediaFileItem {
        // Own properties of RygelServer-2.8.AudioItem

        duration: number;
        bitrate: number;
        sample_freq: number;
        sampleFreq: number;
        bits_per_sample: number;
        bitsPerSample: number;
        channels: number;
        album: string;

        // Constructors of RygelServer-2.8.AudioItem

        static ['new'](id: string, parent: MediaContainer, title: string, upnp_class: string): AudioItem;

        // Owm methods of RygelServer-2.8.AudioItem

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
    }

    class ImageItem extends MediaFileItem {
        // Constructors of RygelServer-2.8.ImageItem

        static ['new'](id: string, parent: MediaContainer, title: string, upnp_class: string): ImageItem;
    }

    class LogicalExpression extends SearchExpression {
        // Constructors of RygelServer-2.8.LogicalExpression

        static ['new'](): LogicalExpression;
    }

    module MediaArtStore {
        // Constructor properties interface
    }

    class MediaArtStore extends GObject.Object {
        // Owm methods of RygelServer-2.8.MediaArtStore

        static get_default(): MediaArtStore | null;

        // Owm methods of RygelServer-2.8.MediaArtStore

        lookup_media_art(item: MusicItem): Thumbnail | null;
        add(item: MusicItem, file: Gio.File, data: Uint8Array, mime: string): void;
        search_media_art_for_file(item: MusicItem, file: Gio.File): void;
    }

    module MediaObjects {
        // Constructor properties interface
    }

    class MediaObjects extends Gee.ArrayList {
        // Constructors of RygelServer-2.8.MediaObjects

        static ['new'](): MediaObjects;

        // Owm methods of RygelServer-2.8.MediaObjects

        sort_by_criteria(sort_criteria: string): void;
    }

    module MusicItem {
        // Constructor properties interface
    }

    class MusicItem extends AudioItem {
        // Own properties of RygelServer-2.8.MusicItem

        track_number: number;
        trackNumber: number;
        disc_number: number;
        discNumber: number;
        album_art: Thumbnail;
        albumArt: Thumbnail;

        // Constructors of RygelServer-2.8.MusicItem

        static ['new'](id: string, parent: MediaContainer, title: string, upnp_class: string): MusicItem;

        // Owm methods of RygelServer-2.8.MusicItem

        lookup_album_art(): void;
        get_track_number(): number;
        set_track_number(value: number): void;
        get_disc_number(): number;
        set_disc_number(value: number): void;
        get_album_art(): Thumbnail;
        set_album_art(value: Thumbnail): void;
    }

    module PhotoItem {
        // Constructor properties interface
    }

    class PhotoItem extends ImageItem {
        // Constructors of RygelServer-2.8.PhotoItem

        static ['new'](id: string, parent: MediaContainer, title: string, upnp_class: string): PhotoItem;
    }

    class RelationalExpression extends SearchExpression {
        // Constructors of RygelServer-2.8.RelationalExpression

        static ['new'](): RelationalExpression;

        // Owm methods of RygelServer-2.8.RelationalExpression

        compare_string(str?: string | null): boolean;
        compare_int(integer: number): boolean;
        compare_uint(integer: number): boolean;
    }

    module SimpleContainer {
        // Constructor properties interface
    }

    class SimpleContainer extends MediaContainer {
        // Own fields of RygelServer-2.8.SimpleContainer

        children: MediaObjects;

        // Constructors of RygelServer-2.8.SimpleContainer

        static ['new'](id: string, parent: MediaContainer | null, title: string): SimpleContainer;

        static root(title: string): SimpleContainer;

        // Owm methods of RygelServer-2.8.SimpleContainer

        add_child_item(child: MediaItem): void;
        get_all_children(): MediaObjects;
        add_child_container(child: MediaContainer): void;
        remove_child(child: MediaObject): void;
        clear(): void;
        is_child_id_unique(child_id: string): boolean;
    }

    class Subtitle {
        // Own fields of RygelServer-2.8.Subtitle

        ref_count: number;
        uri: string;
        mime_type: string;
        caption_type: string;
        file_extension: string;
        size: number;

        // Constructors of RygelServer-2.8.Subtitle

        static ['new'](mime_type: string, caption_type: string, file_extension: string): Subtitle;

        // Owm methods of RygelServer-2.8.Subtitle

        get_resource(protocol: string, index: number): MediaResource;
    }

    class Thumbnail extends RygelCore.IconInfo {
        // Own fields of RygelServer-2.8.Thumbnail

        dlna_profile: string;

        // Constructors of RygelServer-2.8.Thumbnail

        static ['new'](mime_type: string, dlna_profile: string, file_extension: string): Thumbnail;

        // Owm methods of RygelServer-2.8.Thumbnail

        get_resource(protocol: string, index: number): MediaResource;
    }

    module VideoItem {
        // Constructor properties interface
    }

    class VideoItem extends AudioItem {
        // Own properties of RygelServer-2.8.VideoItem

        author: string;
        subtitles: Gee.ArrayList;

        // Constructors of RygelServer-2.8.VideoItem

        static ['new'](id: string, parent: MediaContainer, title: string, upnp_class: string): VideoItem;

        // Owm methods of RygelServer-2.8.VideoItem

        add_subtitle_resources(http_server: HTTPServer): void;
        get_author(): string;
        set_author(value: string): void;
        get_subtitles(): Gee.ArrayList;
        set_subtitles(value: Gee.ArrayList): void;
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
    }

    abstract class MediaContainer extends MediaObject {
        // Own properties of RygelServer-2.8.MediaContainer

        child_count: number;
        childCount: number;
        empty_child_count: number;
        emptyChildCount: number;
        readonly all_child_count: number;
        readonly allChildCount: number;
        create_mode_enabled: boolean;
        createModeEnabled: boolean;
        sort_criteria: string;
        sortCriteria: string;

        // Own fields of RygelServer-2.8.MediaContainer

        update_id: number;
        storage_used: number;
        total_deleted_child_count: number;

        // Owm methods of RygelServer-2.8.MediaContainer

        static equal_func(a: MediaContainer, b: MediaContainer): boolean;

        // Owm methods of RygelServer-2.8.MediaContainer

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
    }

    abstract class MediaItem extends MediaObject {
        // Own properties of RygelServer-2.8.MediaItem

        description: string;

        // Owm methods of RygelServer-2.8.MediaItem

        get_description(): string;
        set_description(value: string): void;
    }

    module MediaFileItem {
        // Constructor properties interface
    }

    abstract class MediaFileItem extends MediaItem {
        // Own properties of RygelServer-2.8.MediaFileItem

        mime_type: string;
        mimeType: string;
        dlna_profile: string;
        dlnaProfile: string;
        size: number;
        place_holder: boolean;
        placeHolder: boolean;

        // Own fields of RygelServer-2.8.MediaFileItem

        rygel_media_file_item_mime_to_ext: Gee.HashMap;

        // Owm methods of RygelServer-2.8.MediaFileItem

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
    }

    abstract class MediaObject extends GObject.Object {
        // Own properties of RygelServer-2.8.MediaObject

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
        readonly ocm_flags: GUPnPAV.OCMFlags;
        readonly ocmFlags: GUPnPAV.OCMFlags;

        // Own fields of RygelServer-2.8.MediaObject

        parent_ptr: MediaContainer;

        // Owm methods of RygelServer-2.8.MediaObject

        static apply_replacements(
            replacement_pairs: GLib.HashTable<string, string>,
            source_string?: string | null,
        ): string | null;

        // Owm methods of RygelServer-2.8.MediaObject

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
    }

    class MediaResource extends GObject.Object {
        // Own properties of RygelServer-2.8.MediaResource

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

        // Own fields of RygelServer-2.8.MediaResource

        play_speeds: string[];
        play_speeds_length1: number;

        // Constructors of RygelServer-2.8.MediaResource

        static ['new'](name: string): MediaResource;

        static from_resource(name: string, that: MediaResource): MediaResource;

        static from_didl_lite_resource(name: string, didl_resource: GUPnPAV.DIDLLiteResource): MediaResource;

        // Owm methods of RygelServer-2.8.MediaResource

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
    }

    abstract class MediaServerPlugin extends RygelCore.Plugin {
        // Own properties of RygelServer-2.8.MediaServerPlugin

        root_container: MediaContainer;
        rootContainer: MediaContainer;
        readonly search_caps: string;
        readonly searchCaps: string;
        upload_profiles: RygelCore.DLNAProfile[];
        uploadProfiles: RygelCore.DLNAProfile[];
        supported_profiles: RygelCore.DLNAProfile[];
        supportedProfiles: RygelCore.DLNAProfile[];

        // Owm methods of RygelServer-2.8.MediaServerPlugin

        get_root_container(): MediaContainer;
        get_search_caps(): string;
        get_upload_profiles(): RygelCore.DLNAProfile[];
        set_upload_profiles(value: RygelCore.DLNAProfile[]): void;
        get_supported_profiles(): RygelCore.DLNAProfile[];
        set_supported_profiles(value: RygelCore.DLNAProfile[]): void;
    }

    abstract class SearchExpression {
        // Own fields of RygelServer-2.8.SearchExpression

        ref_count: number;
        op: any;
        operand1: any;
        operand2: any;

        // Owm methods of RygelServer-2.8.SearchExpression

        satisfied_by(media_object: MediaObject): boolean;
        to_string(): string;
    }

    module MediaServer {
        // Constructor properties interface
    }

    class MediaServer extends RygelCore.MediaDevice {
        // Own properties of RygelServer-2.8.MediaServer

        root_container: MediaContainer;
        rootContainer: MediaContainer;

        // Constructors of RygelServer-2.8.MediaServer

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
    }

    abstract class MediaEngine extends GObject.Object {
        // Owm methods of RygelServer-2.8.MediaEngine

        static init(): void;
        static get_default(): MediaEngine;

        // Owm methods of RygelServer-2.8.MediaEngine

        get_dlna_profiles(): RygelCore.DLNAProfile[];
        get_resources_for_item(item: MediaObject, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        get_resources_for_item_finish(_res_: Gio.AsyncResult): Gee.List | null;
        create_data_source_for_resource(
            item: MediaObject,
            resource: MediaResource,
            replacements: GLib.HashTable<string, string>,
        ): DataSource | null;
        create_data_source_for_uri(uri: string): DataSource | null;
        get_internal_protocol_schemes(): string[];
    }

    module HTTPSeekRequest {
        // Constructor properties interface
    }

    abstract class HTTPSeekRequest extends GObject.Object {}

    module PlaylistItem {
        // Constructor properties interface
    }

    class PlaylistItem extends MediaFileItem {
        // Constructors of RygelServer-2.8.PlaylistItem

        static ['new'](id: string, parent: MediaContainer, title: string, upnp_class: string): PlaylistItem;
    }

    module ContentDirectory {
        // Constructor properties interface
    }

    class ContentDirectory extends GUPnP.Service {
        // Own fields of RygelServer-2.8.ContentDirectory

        feature_list: string;
        http_server: HTTPServer;
        root_container: MediaContainer;
        cancellable: Gio.Cancellable;
        system_update_id: number;

        // Constructors of RygelServer-2.8.ContentDirectory

        static ['new'](): ContentDirectory;
    }

    module HTTPByteSeekRequest {
        // Constructor properties interface
    }

    class HTTPByteSeekRequest extends HTTPSeekRequest {
        // Own properties of RygelServer-2.8.HTTPByteSeekRequest

        start_byte: number;
        startByte: number;
        end_byte: number;
        endByte: number;
        range_length: number;
        rangeLength: number;
        total_size: number;
        totalSize: number;

        // Constructors of RygelServer-2.8.HTTPByteSeekRequest

        static ['new'](msg: Soup.ServerMessage, handler: HTTPGetHandler): HTTPByteSeekRequest;

        // Owm methods of RygelServer-2.8.HTTPByteSeekRequest

        static supported(message: Soup.ServerMessage, handler: HTTPGetHandler): boolean;
        static requested(msg: Soup.ServerMessage): boolean;

        // Owm methods of RygelServer-2.8.HTTPByteSeekRequest

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
    }

    class HTTPByteSeekResponse extends HTTPResponseElement {
        // Own properties of RygelServer-2.8.HTTPByteSeekResponse

        start_byte: number;
        startByte: number;
        end_byte: number;
        endByte: number;
        range_length: number;
        rangeLength: number;
        total_size: number;
        totalSize: number;

        // Constructors of RygelServer-2.8.HTTPByteSeekResponse

        static ['new'](start_byte: number, end_byte: number, total_size: number): HTTPByteSeekResponse;

        static from_request(request: HTTPByteSeekRequest): HTTPByteSeekResponse;

        // Owm methods of RygelServer-2.8.HTTPByteSeekResponse

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
    }

    abstract class HTTPGetHandler extends GObject.Object {
        // Own properties of RygelServer-2.8.HTTPGetHandler

        cancellable: Gio.Cancellable;

        // Owm methods of RygelServer-2.8.HTTPGetHandler

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
    }

    class HTTPGet extends HTTPRequest {
        // Own fields of RygelServer-2.8.HTTPGet

        seek: HTTPSeekRequest;
        speed_request: PlaySpeedRequest;
        handler: HTTPGetHandler;

        // Constructors of RygelServer-2.8.HTTPGet

        static ['new'](http_server: HTTPServer, server: Soup.Server, msg: Soup.ServerMessage): HTTPGet;
    }

    module HTTPItemURI {
        // Constructor properties interface
    }

    class HTTPItemURI extends GObject.Object {
        // Own properties of RygelServer-2.8.HTTPItemURI

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

        // Own fields of RygelServer-2.8.HTTPItemURI

        rygel_http_item_uri_mime_to_ext: Gee.HashMap;

        // Constructors of RygelServer-2.8.HTTPItemURI

        static ['new'](
            object: MediaObject,
            http_server: HTTPServer,
            thumbnail_index: number,
            subtitle_index: number,
            resource_name?: string | null,
        ): HTTPItemURI;

        static from_string(uri: string, http_server: HTTPServer): HTTPItemURI;

        // Owm methods of RygelServer-2.8.HTTPItemURI

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
    }

    abstract class HTTPRequest extends GObject.Object {
        // Own fields of RygelServer-2.8.HTTPRequest

        http_server: HTTPServer;
        server: Soup.Server;
        msg: Soup.ServerMessage;
        uri: HTTPItemURI;
        object: MediaObject;
        hack: ClientHacks;

        // Owm methods of RygelServer-2.8.HTTPRequest

        handle(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        handle_finish(_res_: Gio.AsyncResult): void;
        find_item(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        find_item_finish(_res_: Gio.AsyncResult): void;
        handle_error(_error_: GLib.Error): void;
        end(status: number, reason?: string | null): void;
    }

    module HTTPResponse {
        // Constructor properties interface
    }

    class HTTPResponse extends GObject.Object {
        // Own properties of RygelServer-2.8.HTTPResponse

        server: Soup.Server;
        readonly priority: number;

        // Own fields of RygelServer-2.8.HTTPResponse

        msg: Soup.ServerMessage;
        seek: HTTPSeekRequest;
        speed: PlaySpeedRequest;

        // Constructors of RygelServer-2.8.HTTPResponse

        static ['new'](request: HTTPGet, request_handler: HTTPGetHandler, src: DataSource): HTTPResponse;

        // Owm methods of RygelServer-2.8.HTTPResponse

        preroll(): Gee.List | null;
        end(aborted: boolean, status: number): void;
        get_server(): Soup.Server;
        get_priority(): number;
    }

    module HTTPResponseElement {
        // Constructor properties interface
    }

    abstract class HTTPResponseElement extends GObject.Object {
        // Owm methods of RygelServer-2.8.HTTPResponseElement

        add_response_headers(request: HTTPRequest): void;
        to_string(): string;
    }

    module HTTPServer {
        // Constructor properties interface
    }

    class HTTPServer extends GObject.Object {
        // Own properties of RygelServer-2.8.HTTPServer

        path_root: string;
        pathRoot: string;
        server_name: string;
        serverName: string;

        // Own fields of RygelServer-2.8.HTTPServer

        root_container: MediaContainer;
        context: GUPnP.Context;

        // Constructors of RygelServer-2.8.HTTPServer

        static ['new'](content_dir: ContentDirectory, name: string): HTTPServer;

        // Owm methods of RygelServer-2.8.HTTPServer

        set_resource_delivery_options(res: MediaResource): void;
        need_proxy(uri: string): boolean;
        get_protocol(): string;
        get_protocol_info(): Gee.ArrayList;
        get_replacements(): GLib.HashTable<string, string>;
        is_local(): boolean;
        get_path_root(): string;
        get_server_name(): string;
        set_server_name(value: string): void;
    }

    module HTTPTimeSeekRequest {
        // Constructor properties interface
    }

    class HTTPTimeSeekRequest extends HTTPSeekRequest {
        // Own fields of RygelServer-2.8.HTTPTimeSeekRequest

        start_time: number;
        end_time: number;
        range_duration: number;
        total_duration: number;

        // Owm methods of RygelServer-2.8.HTTPTimeSeekRequest

        static supported(message: Soup.ServerMessage, handler: HTTPGetHandler): boolean;
        static requested(message: Soup.ServerMessage): boolean;

        // Owm methods of RygelServer-2.8.HTTPTimeSeekRequest

        to_string(): string;
    }

    module HTTPTimeSeekResponse {
        // Constructor properties interface
    }

    class HTTPTimeSeekResponse extends HTTPResponseElement {
        // Own properties of RygelServer-2.8.HTTPTimeSeekResponse

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

        // Constructors of RygelServer-2.8.HTTPTimeSeekResponse

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

        // Owm methods of RygelServer-2.8.HTTPTimeSeekResponse

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
    }

    class Serializer extends GObject.Object {
        // Own properties of RygelServer-2.8.Serializer

        serializer_type: SerializerType;
        serializerType: SerializerType;

        // Constructors of RygelServer-2.8.Serializer

        static ['new'](type: SerializerType): Serializer;

        // Owm methods of RygelServer-2.8.Serializer

        add_item(): GUPnPAV.DIDLLiteItem | null;
        add_container(): GUPnPAV.DIDLLiteContainer | null;
        filter(filter_string: string): void;
        get_string(): string;
    }

    class PlaySpeed {
        // Own fields of RygelServer-2.8.PlaySpeed

        ref_count: number;
        numerator: number;
        denominator: number;

        // Constructors of RygelServer-2.8.PlaySpeed

        static ['new'](numerator: number, denominator: number): PlaySpeed;

        static from_string(speed: string): PlaySpeed;

        // Owm methods of RygelServer-2.8.PlaySpeed

        equals(that: PlaySpeed): boolean;
        is_positive(): boolean;
        is_normal_rate(): boolean;
        to_string(): string;
        to_float(): number;
        to_double(): number;
    }

    module PlaySpeedRequest {
        // Constructor properties interface
    }

    class PlaySpeedRequest extends GObject.Object {
        // Own properties of RygelServer-2.8.PlaySpeedRequest

        speed: PlaySpeed;

        // Constructors of RygelServer-2.8.PlaySpeedRequest

        static ['new'](numerator: number, denominator: number): PlaySpeedRequest;

        static from_string(speed: string): PlaySpeedRequest;

        // Owm methods of RygelServer-2.8.PlaySpeedRequest

        static supported(request: HTTPGet): boolean;

        // Owm methods of RygelServer-2.8.PlaySpeedRequest

        equals(that: PlaySpeedRequest): boolean;
        get_speed(): PlaySpeed;
    }

    module PlaySpeedResponse {
        // Constructor properties interface
    }

    class PlaySpeedResponse extends HTTPResponseElement {
        // Own fields of RygelServer-2.8.PlaySpeedResponse

        framerate: number;

        // Constructors of RygelServer-2.8.PlaySpeedResponse

        static ['new'](numerator: number, denominator: number, framerate: number): PlaySpeedResponse;

        static from_speed(speed: PlaySpeed, framerate: number): PlaySpeedResponse;

        static from_string(speed: string, framerate: number): PlaySpeedResponse;

        // Owm methods of RygelServer-2.8.PlaySpeedResponse

        equals(that: PlaySpeedRequest): boolean;
    }

    module DTCPCleartextRequest {
        // Constructor properties interface
    }

    class DTCPCleartextRequest extends HTTPSeekRequest {
        // Own properties of RygelServer-2.8.DTCPCleartextRequest

        start_byte: number;
        startByte: number;
        end_byte: number;
        endByte: number;
        range_length: number;
        rangeLength: number;
        total_size: number;
        totalSize: number;

        // Constructors of RygelServer-2.8.DTCPCleartextRequest

        static ['new'](message: Soup.ServerMessage, handler: HTTPGetHandler): DTCPCleartextRequest;

        // Owm methods of RygelServer-2.8.DTCPCleartextRequest

        static supported(message: Soup.ServerMessage, handler: HTTPGetHandler): boolean;
        static requested(message: Soup.ServerMessage): boolean;

        // Owm methods of RygelServer-2.8.DTCPCleartextRequest

        get_start_byte(): number;
        get_end_byte(): number;
        get_range_length(): number;
        get_total_size(): number;
    }

    module DTCPCleartextResponse {
        // Constructor properties interface
    }

    class DTCPCleartextResponse extends HTTPResponseElement {
        // Own properties of RygelServer-2.8.DTCPCleartextResponse

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

        // Constructors of RygelServer-2.8.DTCPCleartextResponse

        static ['new'](
            start_byte: number,
            end_byte: number,
            total_size: number,
            encrypted_length: number,
        ): DTCPCleartextResponse;

        static from_request(request: DTCPCleartextRequest, encrypted_length: number): DTCPCleartextResponse;

        // Owm methods of RygelServer-2.8.DTCPCleartextResponse

        get_start_byte(): number;
        get_end_byte(): number;
        get_range_length(): number;
        get_total_size(): number;
        get_encrypted_length(): number;
        set_encrypted_length(value: number): void;
    }

    module DLNAAvailableSeekRangeRequest {
        // Constructor properties interface
    }

    class DLNAAvailableSeekRangeRequest extends HTTPSeekRequest {
        // Owm methods of RygelServer-2.8.DLNAAvailableSeekRangeRequest

        static supported(message: Soup.Message, handler: HTTPGetHandler): boolean;
        static requested(message: Soup.Message): boolean;
    }

    module DLNAAvailableSeekRangeResponse {
        // Constructor properties interface
    }

    class DLNAAvailableSeekRangeResponse extends HTTPResponseElement {
        // Own properties of RygelServer-2.8.DLNAAvailableSeekRangeResponse

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

        // Constructors of RygelServer-2.8.DLNAAvailableSeekRangeResponse

        static ['new'](
            mode: number,
            start_time: number,
            end_time: number,
            start_byte: number,
            end_byte: number,
        ): DLNAAvailableSeekRangeResponse;

        static time_only(mode: number, start_time: number, end_time: number): DLNAAvailableSeekRangeResponse;

        // Owm methods of RygelServer-2.8.DLNAAvailableSeekRangeResponse

        get_mode(): number;
        get_start_time(): number;
        get_end_time(): number;
        get_start_byte(): number;
        get_end_byte(): number;
        get_range_length(): number;
    }

    class AudioItemClass {}

    class AudioItemPrivate {}

    class ImageItemClass {}

    class ImageItemPrivate {}

    class LogicalExpressionClass {}

    class LogicalExpressionPrivate {}

    class MediaArtStoreClass {}

    class MediaArtStorePrivate {}

    class MediaObjectsClass {}

    class MediaObjectsPrivate {}

    class MusicItemClass {}

    class MusicItemPrivate {}

    class PhotoItemClass {}

    class PhotoItemPrivate {}

    class RelationalExpressionClass {}

    class RelationalExpressionPrivate {}

    class SimpleContainerClass {}

    class SimpleContainerPrivate {}

    class SubtitleClass {}

    class SubtitlePrivate {}

    class ThumbnailClass {}

    class ThumbnailPrivate {}

    class VideoItemClass {}

    class VideoItemPrivate {}

    class MediaContainerClass {}

    class MediaContainerPrivate {}

    class MediaItemClass {}

    class MediaItemPrivate {}

    class MediaFileItemClass {}

    class MediaFileItemPrivate {}

    class MediaObjectClass {}

    class MediaObjectPrivate {}

    class MediaResourceClass {}

    class MediaResourcePrivate {}

    class MediaServerPluginClass {}

    class MediaServerPluginPrivate {}

    class SearchExpressionClass {}

    class SearchExpressionPrivate {}

    class MediaServerClass {}

    class MediaServerPrivate {}

    class MediaEngineClass {}

    class MediaEnginePrivate {}

    class HTTPSeekRequestClass {}

    class HTTPSeekRequestPrivate {}

    class PlaylistItemClass {}

    class PlaylistItemPrivate {}

    class ContentDirectoryClass {}

    class ContentDirectoryPrivate {}

    class HTTPByteSeekRequestClass {}

    class HTTPByteSeekRequestPrivate {}

    class HTTPByteSeekResponseClass {}

    class HTTPByteSeekResponsePrivate {}

    class HTTPGetHandlerClass {}

    class HTTPGetHandlerPrivate {}

    class HTTPGetClass {}

    class HTTPGetPrivate {}

    class HTTPItemURIClass {}

    class HTTPItemURIPrivate {}

    class HTTPRequestClass {}

    class HTTPRequestPrivate {}

    class HTTPResponseClass {}

    class HTTPResponsePrivate {}

    class HTTPResponseElementClass {}

    class HTTPResponseElementPrivate {}

    class HTTPServerClass {}

    class HTTPServerPrivate {}

    class HTTPTimeSeekRequestClass {}

    class HTTPTimeSeekRequestPrivate {}

    class HTTPTimeSeekResponseClass {}

    class HTTPTimeSeekResponsePrivate {}

    class SerializerClass {}

    class SerializerPrivate {}

    class PlaySpeedClass {}

    class PlaySpeedPrivate {}

    class PlaySpeedRequestClass {}

    class PlaySpeedRequestPrivate {}

    class PlaySpeedResponseClass {}

    class PlaySpeedResponsePrivate {}

    class DTCPCleartextRequestClass {}

    class DTCPCleartextRequestPrivate {}

    class DTCPCleartextResponseClass {}

    class DTCPCleartextResponsePrivate {}

    class DLNAAvailableSeekRangeRequestClass {}

    class DLNAAvailableSeekRangeRequestPrivate {}

    class DLNAAvailableSeekRangeResponseClass {}

    class DLNAAvailableSeekRangeResponsePrivate {}

    class SearchableContainerIface {}

    class TrackableContainerIface {}

    class TrackableItemIface {}

    class VisualItemIface {}

    class WritableContainerIface {}

    class DataSourceIface {}

    class UpdatableObjectIface {}

    interface SearchableContainer {
        // Own properties of RygelServer-2.8.SearchableContainer

        search_classes: Gee.ArrayList;
        searchClasses: Gee.ArrayList;

        // Owm methods of RygelServer-2.8.SearchableContainer

        search(
            expression: SearchExpression | null,
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        search_finish(_res_: Gio.AsyncResult): MediaObjects | null;
        simple_search(
            expression: SearchExpression | null,
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        simple_search_finish(_res_: Gio.AsyncResult): MediaObjects | null;
        find_object(
            id: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        find_object_finish(_res_: Gio.AsyncResult): MediaObject | null;
        get_search_classes(): Gee.ArrayList;
        set_search_classes(value: Gee.ArrayList): void;

        // Own virtual methods of RygelServer-2.8.SearchableContainer

        vfunc_search(
            expression: SearchExpression | null,
            offset: number,
            max_count: number,
            sort_criteria: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_search_finish(_res_: Gio.AsyncResult): MediaObjects | null;
        vfunc_get_search_classes(): Gee.ArrayList;
        vfunc_set_search_classes(value: Gee.ArrayList): void;
    }

    interface TrackableContainer {
        // Owm methods of RygelServer-2.8.TrackableContainer

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

        // Own virtual methods of RygelServer-2.8.TrackableContainer

        vfunc_add_child(object: MediaObject, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_add_child_finish(_res_: Gio.AsyncResult): void;
        vfunc_remove_child(object: MediaObject, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_remove_child_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_service_reset_token(): string;
        vfunc_set_service_reset_token(token: string): void;
        vfunc_get_system_update_id(): number;
    }

    interface TrackableItem {
        // Owm methods of RygelServer-2.8.TrackableItem

        changed(): void;
    }

    interface VisualItem {
        // Own properties of RygelServer-2.8.VisualItem

        width: number;
        height: number;
        color_depth: number;
        colorDepth: number;
        thumbnails: Gee.ArrayList;

        // Owm methods of RygelServer-2.8.VisualItem

        get_width(): number;
        set_width(value: number): void;
        get_height(): number;
        set_height(value: number): void;
        get_color_depth(): number;
        set_color_depth(value: number): void;
        get_thumbnails(): Gee.ArrayList;
        set_thumbnails(value: Gee.ArrayList): void;

        // Own virtual methods of RygelServer-2.8.VisualItem

        vfunc_get_width(): number;
        vfunc_set_width(value: number): void;
        vfunc_get_height(): number;
        vfunc_set_height(value: number): void;
        vfunc_get_color_depth(): number;
        vfunc_set_color_depth(value: number): void;
        vfunc_get_thumbnails(): Gee.ArrayList;
        vfunc_set_thumbnails(value: Gee.ArrayList): void;
    }

    interface WritableContainer {
        // Own properties of RygelServer-2.8.WritableContainer

        create_classes: Gee.ArrayList;
        createClasses: Gee.ArrayList;

        // Owm methods of RygelServer-2.8.WritableContainer

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

        // Own virtual methods of RygelServer-2.8.WritableContainer

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

    interface DataSource {
        // Owm methods of RygelServer-2.8.DataSource

        preroll(seek?: HTTPSeekRequest | null, playspeed?: PlaySpeedRequest | null): Gee.List | null;
        start(): void;
        freeze(): void;
        thaw(): void;
        stop(): void;

        // Own virtual methods of RygelServer-2.8.DataSource

        vfunc_preroll(seek?: HTTPSeekRequest | null, playspeed?: PlaySpeedRequest | null): Gee.List | null;
        vfunc_start(): void;
        vfunc_freeze(): void;
        vfunc_thaw(): void;
        vfunc_stop(): void;
    }

    interface UpdatableObject {
        // Owm methods of RygelServer-2.8.UpdatableObject

        commit(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        commit_finish(_res_: Gio.AsyncResult): void;

        // Own virtual methods of RygelServer-2.8.UpdatableObject

        vfunc_commit(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_commit_finish(_res_: Gio.AsyncResult): void;
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

export default RygelServer;
// END
