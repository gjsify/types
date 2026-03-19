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
import type Gst from '@girs/gst-0.10';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstTag {
    /**
     * GstTag-0.10
     */

    export namespace DemuxResult {
        export const $gtype: GObject.GType<DemuxResult>;
    }

    /**
     * Result values from the parse_tag virtual function.
     * @gir-type Enum
     * @since 0.10.15
     */
    enum DemuxResult {
        BROKEN_TAG,
        AGAIN,
        OK,
    }

    export namespace ImageType {
        export const $gtype: GObject.GType<ImageType>;
    }

    /**
     * Type of image contained in an image tag (specified as field in
     * the image buffer's caps structure)
     * @gir-type Enum
     * @since 0.10.9
     */
    enum ImageType {
        NONE,
        UNDEFINED,
        FRONT_COVER,
        BACK_COVER,
        LEAFLET_PAGE,
        MEDIUM,
        LEAD_ARTIST,
        ARTIST,
        CONDUCTOR,
        BAND_ORCHESTRA,
        COMPOSER,
        LYRICIST,
        RECORDING_LOCATION,
        DURING_RECORDING,
        DURING_PERFORMANCE,
        VIDEO_CAPTURE,
        FISH,
        ILLUSTRATION,
        ARTIST_LOGO,
        PUBLISHER_STUDIO_LOGO,
    }

    const CDDA_CDDB_DISCID: string;
    const CDDA_CDDB_DISCID_FULL: string;
    const CDDA_MUSICBRAINZ_DISCID: string;
    const CDDA_MUSICBRAINZ_DISCID_FULL: string;
    const CMML_CLIP: string;
    const CMML_HEAD: string;
    const CMML_STREAM: string;
    const MUSICBRAINZ_ALBUMARTISTID: string;
    const MUSICBRAINZ_ALBUMID: string;
    const MUSICBRAINZ_ARTISTID: string;
    const MUSICBRAINZ_TRACKID: string;
    const MUSICBRAINZ_TRMID: string;
    /**
     * @param data
     * @param size
     * @param env_vars
     */
    function freeform_string_to_utf8(data: string, size: number, env_vars: string[]): string;
    /**
     * @param id3_tag
     */
    function from_id3_tag(id3_tag: string): string;
    /**
     * @param type
     * @param id3_user_tag
     */
    function from_id3_user_tag(type: string, id3_user_tag: string): string;
    /**
     * @param vorbis_tag
     */
    function from_vorbis_tag(vorbis_tag: string): string;
    /**
     * @param lang_code
     */
    function get_language_code_iso_639_1(lang_code: string): string;
    /**
     * @param lang_code
     */
    function get_language_code_iso_639_2B(lang_code: string): string;
    /**
     * @param lang_code
     */
    function get_language_code_iso_639_2T(lang_code: string): string;
    function get_language_codes(): string[];
    /**
     * @param language_code
     */
    function get_language_name(language_code: string): string;
    /**
     * @param list
     * @param tag
     * @param value
     */
    function gst_vorbis_tag_add(list: Gst.TagList, tag: string, value: string): void;
    function id3_genre_count(): number;
    /**
     * @param id
     */
    function id3_genre_get(id: number): string;
    /**
     * @param image_data
     * @param image_data_len
     * @param image_type
     */
    function image_data_to_image_buffer(
        image_data: number[],
        image_data_len: number,
        image_type: ImageType | null,
    ): Gst.Buffer;
    /**
     * @param tag_list
     * @param image_data
     * @param image_data_len
     * @param id3_picture_type
     */
    function list_add_id3_image(
        tag_list: Gst.TagList,
        image_data: number[],
        image_data_len: number,
        id3_picture_type: number,
    ): boolean;
    /**
     * @param buffer
     * @param id_data
     * @param id_data_length
     * @param vendor_string
     */
    function list_from_vorbiscomment_buffer(
        buffer: Gst.Buffer,
        id_data: number[],
        id_data_length: number,
        vendor_string: string[],
    ): Gst.TagList;
    /**
     * @param buffer
     */
    function list_from_xmp_buffer(buffer: Gst.Buffer): Gst.TagList;
    /**
     * @param data
     */
    function list_new_from_id3v1(data: number[]): Gst.TagList;
    /**
     * @param list
     * @param id_data
     * @param id_data_length
     * @param vendor_string
     */
    function list_to_vorbiscomment_buffer(
        list: Gst.TagList,
        id_data: number[],
        id_data_length: number,
        vendor_string: string,
    ): Gst.Buffer;
    /**
     * @param list
     * @param read_only
     */
    function list_to_xmp_buffer(list: Gst.TagList, read_only: boolean): Gst.Buffer;
    /**
     * @param ext_comment
     * @param key
     * @param lang
     * @param value
     * @param fail_if_no_key
     */
    function parse_extended_comment(
        ext_comment: string,
        key: string[],
        lang: string[],
        value: string[],
        fail_if_no_key: boolean,
    ): boolean;
    function register_musicbrainz_tags(): void;
    /**
     * @param gst_tag
     */
    function to_id3_tag(gst_tag: string): string;
    /**
     * @param gst_tag
     */
    function to_vorbis_tag(gst_tag: string): string;
    namespace Demux {
        // Signal signatures
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Element.ConstructorProps {}
    }

    /**
     * Opaque {@link GstTag.Demux} structure.
     * @gir-type Class
     * @since 0.10.15
     */
    abstract class Demux extends Gst.Element {
        static $gtype: GObject.GType<Demux>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Demux.SignalSignatures;

        // Fields

        element: Gst.Element;
        reserved: any[];

        // Constructors

        constructor(properties?: Partial<Demux.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Demux.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Demux.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Demux.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Demux.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Demux.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Demux.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param buffer
         * @param start_tag
         * @virtual
         */
        vfunc_identify_tag(buffer: Gst.Buffer, start_tag: boolean): [boolean, number];
        /**
         * @param buffer
         * @param start_tag
         * @param tags
         * @virtual
         */
        vfunc_parse_tag(buffer: Gst.Buffer, start_tag: boolean, tags: Gst.TagList): [DemuxResult, number];
        /**
         * @param start_tags
         * @param end_tags
         * @virtual
         */
        vfunc_merge_tags(start_tags: Gst.TagList, end_tags: Gst.TagList): Gst.TagList;
    }

    /**
     * @gir-type Alias
     */
    type DemuxClass = typeof Demux;
    /**
     * @gir-type Struct
     */
    class DemuxPrivate {
        static $gtype: GObject.GType<DemuxPrivate>;
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

export default GstTag;

// END
