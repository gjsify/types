/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

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

    /**
     * Result values from the parse_tag virtual function.
     */

    /**
     * Result values from the parse_tag virtual function.
     */
    export namespace DemuxResult {
        export const $gtype: GObject.GType<DemuxResult>;
    }

    enum DemuxResult {
        BROKEN_TAG,
        AGAIN,
        OK,
    }
    /**
     * Type of image contained in an image tag (specified as field in
     * the image buffer's caps structure)
     */

    /**
     * Type of image contained in an image tag (specified as field in
     * the image buffer's caps structure)
     */
    export namespace ImageType {
        export const $gtype: GObject.GType<ImageType>;
    }

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
    function freeform_string_to_utf8(data: string, size: number, env_vars: string[]): string;
    function from_id3_tag(id3_tag: string): string;
    function from_id3_user_tag(type: string, id3_user_tag: string): string;
    function from_vorbis_tag(vorbis_tag: string): string;
    function get_language_code_iso_639_1(lang_code: string): string;
    function get_language_code_iso_639_2B(lang_code: string): string;
    function get_language_code_iso_639_2T(lang_code: string): string;
    function get_language_codes(): string[];
    function get_language_name(language_code: string): string;
    function gst_vorbis_tag_add(list: Gst.TagList, tag: string, value: string): void;
    function id3_genre_count(): number;
    function id3_genre_get(id: number): string;
    function image_data_to_image_buffer(
        image_data: number[],
        image_data_len: number,
        image_type: ImageType | null,
    ): Gst.Buffer;
    function list_add_id3_image(
        tag_list: Gst.TagList,
        image_data: number[],
        image_data_len: number,
        id3_picture_type: number,
    ): boolean;
    function list_from_vorbiscomment_buffer(
        buffer: Gst.Buffer,
        id_data: number[],
        id_data_length: number,
        vendor_string: string[],
    ): Gst.TagList;
    function list_from_xmp_buffer(buffer: Gst.Buffer): Gst.TagList;
    function list_new_from_id3v1(data: number[]): Gst.TagList;
    function list_to_vorbiscomment_buffer(
        list: Gst.TagList,
        id_data: number[],
        id_data_length: number,
        vendor_string: string,
    ): Gst.Buffer;
    function list_to_xmp_buffer(list: Gst.TagList, read_only: boolean): Gst.Buffer;
    function parse_extended_comment(
        ext_comment: string,
        key: string[],
        lang: string[],
        value: string[],
        fail_if_no_key: boolean,
    ): boolean;
    function register_musicbrainz_tags(): void;
    function to_id3_tag(gst_tag: string): string;
    function to_vorbis_tag(gst_tag: string): string;
    namespace Demux {
        // Constructor properties interface

        interface ConstructorProps extends Gst.Element.ConstructorProps {}
    }

    /**
     * Opaque #GstTagDemux structure.
     */
    abstract class Demux extends Gst.Element {
        static $gtype: GObject.GType<Demux>;

        // Fields

        element: Gst.Element;
        reserved: any[];

        // Constructors

        constructor(properties?: Partial<Demux.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        vfunc_identify_tag(buffer: Gst.Buffer, start_tag: boolean): [boolean, number];
        vfunc_parse_tag(buffer: Gst.Buffer, start_tag: boolean, tags: Gst.TagList): [DemuxResult, number];
        vfunc_merge_tags(start_tags: Gst.TagList, end_tags: Gst.TagList): Gst.TagList;
    }

    type DemuxClass = typeof Demux;
    class DemuxPrivate {
        static $gtype: GObject.GType<DemuxPrivate>;

        // Constructors

        _init(...args: any[]): void;
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
