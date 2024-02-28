/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gsttag-0.10-ambient.d.ts';
import './gsttag-0.10-import.d.ts';
/**
 * GstTag-0.10
 */

import type libxml2 from '@girs/libxml2-2.0';
import type Gst from '@girs/gst-0.10';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstTag {
    /**
     * Result values from the parse_tag virtual function.
     */
    enum DemuxResult {
        BROKEN_TAG,
        AGAIN,
        OK,
    }
    /**
     * Type of image contained in an image tag (specified as field in
     * the image buffer's caps structure)
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
    function freeform_string_to_utf8(data: string, size: int, env_vars: string[]): string;
    function from_id3_tag(id3_tag: string): string;
    function from_id3_user_tag(type: string, id3_user_tag: string): string;
    function from_vorbis_tag(vorbis_tag: string): string;
    function get_language_code_iso_639_1(lang_code: string): string;
    function get_language_code_iso_639_2B(lang_code: string): string;
    function get_language_code_iso_639_2T(lang_code: string): string;
    function get_language_codes(): string[];
    function get_language_name(language_code: string): string;
    function gst_vorbis_tag_add(list: Gst.TagList, tag: string, value: string): void;
    function id3_genre_count(): uint;
    function id3_genre_get(id: uint): string;
    function image_data_to_image_buffer(image_data: uint8[], image_data_len: uint, image_type: ImageType): Gst.Buffer;
    function list_add_id3_image(
        tag_list: Gst.TagList,
        image_data: uint8[],
        image_data_len: uint,
        id3_picture_type: uint,
    ): boolean;
    function list_from_vorbiscomment_buffer(
        buffer: Gst.Buffer,
        id_data: uint8[],
        id_data_length: uint,
        vendor_string: string[],
    ): Gst.TagList;
    function list_from_xmp_buffer(buffer: Gst.Buffer): Gst.TagList;
    function list_new_from_id3v1(data: uint8[]): Gst.TagList;
    function list_to_vorbiscomment_buffer(
        list: Gst.TagList,
        id_data: uint8[],
        id_data_length: uint,
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
    module Demux {
        // Constructor properties interface
    }

    /**
     * Opaque #GstTagDemux structure.
     */
    abstract class Demux extends Gst.Element {
        // Own fields of GstTag-0.10.Demux

        element: Gst.Element;
        reserved: any[];
    }

    /**
     * The #GstTagDemuxClass structure.  See documentation at beginning of section
     * for details about what subclasses need to override and do.
     */
    class DemuxClass {
        // Own fields of GstTag-0.10.DemuxClass

        min_start_size: uint;
        min_end_size: uint;
        reserved: any[];
    }

    class DemuxPrivate {}

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
