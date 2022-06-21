// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstTag-0.10
 */

import type * as Gjs from './Gjs';
import type libxml2 from './libxml2-2.0';
import type Gst from './Gst-0.10';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

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
const CDDA_CDDB_DISCID: string
const CDDA_CDDB_DISCID_FULL: string
const CDDA_MUSICBRAINZ_DISCID: string
const CDDA_MUSICBRAINZ_DISCID_FULL: string
const CMML_CLIP: string
const CMML_HEAD: string
const CMML_STREAM: string
const MUSICBRAINZ_ALBUMARTISTID: string
const MUSICBRAINZ_ALBUMID: string
const MUSICBRAINZ_ARTISTID: string
const MUSICBRAINZ_TRACKID: string
const MUSICBRAINZ_TRMID: string
function freeform_string_to_utf8(data: string, size: number, env_vars: string[]): string
function from_id3_tag(id3_tag: string): string
function from_id3_user_tag(type: string, id3_user_tag: string): string
function from_vorbis_tag(vorbis_tag: string): string
function get_language_code_iso_639_1(lang_code: string): string
function get_language_code_iso_639_2B(lang_code: string): string
function get_language_code_iso_639_2T(lang_code: string): string
function get_language_codes(): string[]
function get_language_name(language_code: string): string
function gst_vorbis_tag_add(list: Gst.TagList, tag: string, value: string): void
function id3_genre_count(): number
function id3_genre_get(id: number): string
function image_data_to_image_buffer(image_data: any[], image_data_len: number, image_type: ImageType): Gst.Buffer
function list_add_id3_image(tag_list: Gst.TagList, image_data: any[], image_data_len: number, id3_picture_type: number): boolean
function list_from_vorbiscomment_buffer(buffer: Gst.Buffer, id_data: any[], id_data_length: number, vendor_string: string[]): Gst.TagList
function list_from_xmp_buffer(buffer: Gst.Buffer): Gst.TagList
function list_new_from_id3v1(data: any[]): Gst.TagList
function list_to_vorbiscomment_buffer(list: Gst.TagList, id_data: any[], id_data_length: number, vendor_string: string): Gst.Buffer
function list_to_xmp_buffer(list: Gst.TagList, read_only: boolean): Gst.Buffer
function parse_extended_comment(ext_comment: string, key: string[], lang: string[], value: string[], fail_if_no_key: boolean): boolean
function register_musicbrainz_tags(): void
function to_id3_tag(gst_tag: string): string
function to_vorbis_tag(gst_tag: string): string
interface Demux_ConstructProps extends Gst.Element_ConstructProps {
}

interface Demux {

    // Conflicting properties

    object: any

    // Own fields of GstTag-0.10.GstTag.Demux

    element: Gst.Element
    priv: DemuxPrivate
    reserved: any[]

    // Own virtual methods of GstTag-0.10.GstTag.Demux

    vfunc_identify_tag(buffer: Gst.Buffer, start_tag: boolean): [ /* returnType */ boolean, /* tag_size */ number ]
    vfunc_parse_tag(buffer: Gst.Buffer, start_tag: boolean, tags: Gst.TagList): [ /* returnType */ DemuxResult, /* tag_size */ number ]
    vfunc_merge_tags(start_tags: Gst.TagList, end_tags: Gst.TagList): Gst.TagList

    // Class property signals of GstTag-0.10.GstTag.Demux

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque #GstTagDemux structure.
 * @class 
 */
class Demux extends Gst.Element {

    // Own properties of GstTag-0.10.GstTag.Demux

    static name: string
    static $gtype: GObject.GType<Demux>

    // Constructors of GstTag-0.10.GstTag.Demux

    constructor(config?: Demux_ConstructProps) 
    _init(config?: Demux_ConstructProps): void
}

interface DemuxClass {

    // Own fields of GstTag-0.10.GstTag.DemuxClass

    parent_class: Gst.ElementClass
    min_start_size: number
    min_end_size: number
    identify_tag: (demux: Demux, buffer: Gst.Buffer, start_tag: boolean) => [ /* returnType */ boolean, /* tag_size */ number ]
    parse_tag: (demux: Demux, buffer: Gst.Buffer, start_tag: boolean, tags: Gst.TagList) => [ /* returnType */ DemuxResult, /* tag_size */ number ]
    merge_tags: (demux: Demux, start_tags: Gst.TagList, end_tags: Gst.TagList) => Gst.TagList
    reserved: any[]
}

/**
 * The #GstTagDemuxClass structure.  See documentation at beginning of section
 * for details about what subclasses need to override and do.
 * @record 
 */
abstract class DemuxClass {

    // Own properties of GstTag-0.10.GstTag.DemuxClass

    static name: string
}

interface DemuxPrivate {
}

class DemuxPrivate {

    // Own properties of GstTag-0.10.GstTag.DemuxPrivate

    static name: string
}

}
export default GstTag;