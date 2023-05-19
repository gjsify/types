
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gsttag-0.10-import.d.ts';
    
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
function freeformStringToUtf8(data: string | null, size: number, envVars: string[]): string | null
function fromId3Tag(id3Tag: string | null): string | null
function fromId3UserTag(type: string | null, id3UserTag: string | null): string | null
function fromVorbisTag(vorbisTag: string | null): string | null
function getLanguageCodeIso6391(langCode: string | null): string | null
function getLanguageCodeIso6392B(langCode: string | null): string | null
function getLanguageCodeIso6392T(langCode: string | null): string | null
function getLanguageCodes(): string[]
function getLanguageName(languageCode: string | null): string | null
function gstVorbisTagAdd(list: Gst.TagList, tag: string | null, value: string | null): void
function id3GenreCount(): number
function id3GenreGet(id: number): string | null
function imageDataToImageBuffer(imageData: number[], imageDataLen: number, imageType: ImageType): Gst.Buffer
function listAddId3Image(tagList: Gst.TagList, imageData: number[], imageDataLen: number, id3PictureType: number): boolean
function listFromVorbiscommentBuffer(buffer: Gst.Buffer, idData: number[], idDataLength: number, vendorString: string[]): Gst.TagList
function listFromXmpBuffer(buffer: Gst.Buffer): Gst.TagList
function listNewFromId3v1(data: number[]): Gst.TagList
function listToVorbiscommentBuffer(list: Gst.TagList, idData: number[], idDataLength: number, vendorString: string | null): Gst.Buffer
function listToXmpBuffer(list: Gst.TagList, readOnly: boolean): Gst.Buffer
function parseExtendedComment(extComment: string | null, key: string[], lang: string[], value: string[], failIfNoKey: boolean): boolean
function registerMusicbrainzTags(): void
function toId3Tag(gstTag: string | null): string | null
function toVorbisTag(gstTag: string | null): string | null
module Demux {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.Element.ConstructorProperties {
    }

}

interface Demux {

    // Own properties of GstTag-0.10.GstTag.Demux

    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstTag-0.10.GstTag.Demux

    element: Gst.Element
    priv: DemuxPrivate
    reserved: any[]

    // Own virtual methods of GstTag-0.10.GstTag.Demux

    identifyTag(buffer: Gst.Buffer, startTag: boolean): [ /* returnType */ boolean, /* tagSize */ number ]
    parseTag(buffer: Gst.Buffer, startTag: boolean, tags: Gst.TagList): [ /* returnType */ DemuxResult, /* tagSize */ number ]
    mergeTags(startTags: Gst.TagList, endTags: Gst.TagList): Gst.TagList

    // Class property signals of GstTag-0.10.GstTag.Demux

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

    // Constructors of GstTag-0.10.GstTag.Demux

    constructor(config?: Demux.ConstructorProperties) 
    _init(config?: Demux.ConstructorProperties): void
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
// END