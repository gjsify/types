// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstTag-0.10
 */

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
function freeformStringToUtf8(data: string, size: number, envVars: string[]): string
function fromId3Tag(id3Tag: string): string
function fromId3UserTag(type: string, id3UserTag: string): string
function fromVorbisTag(vorbisTag: string): string
function getLanguageCodeIso6391(langCode: string): string
function getLanguageCodeIso6392B(langCode: string): string
function getLanguageCodeIso6392T(langCode: string): string
function getLanguageCodes(): string[]
function getLanguageName(languageCode: string): string
function gstVorbisTagAdd(list: Gst.TagList, tag: string, value: string): void
function id3GenreCount(): number
function id3GenreGet(id: number): string
function imageDataToImageBuffer(imageData: any[], imageDataLen: number, imageType: ImageType): Gst.Buffer
function listAddId3Image(tagList: Gst.TagList, imageData: any[], imageDataLen: number, id3PictureType: number): boolean
function listFromVorbiscommentBuffer(buffer: Gst.Buffer, idData: any[], idDataLength: number, vendorString: string[]): Gst.TagList
function listFromXmpBuffer(buffer: Gst.Buffer): Gst.TagList
function listNewFromId3v1(data: any[]): Gst.TagList
function listToVorbiscommentBuffer(list: Gst.TagList, idData: any[], idDataLength: number, vendorString: string): Gst.Buffer
function listToXmpBuffer(list: Gst.TagList, readOnly: boolean): Gst.Buffer
function parseExtendedComment(extComment: string, key: string[], lang: string[], value: string[], failIfNoKey: boolean): boolean
function registerMusicbrainzTags(): void
function toId3Tag(gstTag: string): string
function toVorbisTag(gstTag: string): string
interface Demux_ConstructProps extends Gst.Element_ConstructProps {
}

interface Demux {

    // Conflicting properties

    object: any

    // Own fields of GstTag-0.10.GstTag.Demux

    element: Gst.Element
    priv: DemuxPrivate
    reserved: any[]

    // Class property signals of GstTag-0.10.GstTag.Demux

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    parentClass: Gst.ElementClass
    minStartSize: number
    minEndSize: number
    identifyTag: (demux: Demux, buffer: Gst.Buffer, startTag: boolean) => [ /* returnType */ boolean, /* tagSize */ number ]
    parseTag: (demux: Demux, buffer: Gst.Buffer, startTag: boolean, tags: Gst.TagList) => [ /* returnType */ DemuxResult, /* tagSize */ number ]
    mergeTags: (demux: Demux, startTags: Gst.TagList, endTags: Gst.TagList) => Gst.TagList
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