
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * GstTag-0.10
 */

import type libxml2 from '@girs/node-libxml2-2.0';
import type Gst from '@girs/node-gst-0.10';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GModule from '@girs/node-gmodule-2.0';

/**
 * Result values from the parse_tag virtual function.
 */
export enum DemuxResult {
    BROKEN_TAG,
    AGAIN,
    OK,
}
/**
 * Type of image contained in an image tag (specified as field in
 * the image buffer's caps structure)
 */
export enum ImageType {
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
export const CDDA_CDDB_DISCID: string
export const CDDA_CDDB_DISCID_FULL: string
export const CDDA_MUSICBRAINZ_DISCID: string
export const CDDA_MUSICBRAINZ_DISCID_FULL: string
export const CMML_CLIP: string
export const CMML_HEAD: string
export const CMML_STREAM: string
export const MUSICBRAINZ_ALBUMARTISTID: string
export const MUSICBRAINZ_ALBUMID: string
export const MUSICBRAINZ_ARTISTID: string
export const MUSICBRAINZ_TRACKID: string
export const MUSICBRAINZ_TRMID: string
export function freeformStringToUtf8(data: string | null, size: number, envVars: string[]): string | null
export function fromId3Tag(id3Tag: string | null): string | null
export function fromId3UserTag(type: string | null, id3UserTag: string | null): string | null
export function fromVorbisTag(vorbisTag: string | null): string | null
export function getLanguageCodeIso6391(langCode: string | null): string | null
export function getLanguageCodeIso6392B(langCode: string | null): string | null
export function getLanguageCodeIso6392T(langCode: string | null): string | null
export function getLanguageCodes(): string[]
export function getLanguageName(languageCode: string | null): string | null
export function gstVorbisTagAdd(list: Gst.TagList, tag: string | null, value: string | null): void
export function id3GenreCount(): number
export function id3GenreGet(id: number): string | null
export function imageDataToImageBuffer(imageData: number[], imageDataLen: number, imageType: ImageType): Gst.Buffer
export function listAddId3Image(tagList: Gst.TagList, imageData: number[], imageDataLen: number, id3PictureType: number): boolean
export function listFromVorbiscommentBuffer(buffer: Gst.Buffer, idData: number[], idDataLength: number, vendorString: string[]): Gst.TagList
export function listFromXmpBuffer(buffer: Gst.Buffer): Gst.TagList
export function listNewFromId3v1(data: number[]): Gst.TagList
export function listToVorbiscommentBuffer(list: Gst.TagList, idData: number[], idDataLength: number, vendorString: string | null): Gst.Buffer
export function listToXmpBuffer(list: Gst.TagList, readOnly: boolean): Gst.Buffer
export function parseExtendedComment(extComment: string | null, key: string[], lang: string[], value: string[], failIfNoKey: boolean): boolean
export function registerMusicbrainzTags(): void
export function toId3Tag(gstTag: string | null): string | null
export function toVorbisTag(gstTag: string | null): string | null
export module Demux {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {
    }

}

export interface Demux {

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
export class Demux extends Gst.Element {

    // Own properties of GstTag-0.10.GstTag.Demux

    static name: string

    // Constructors of GstTag-0.10.GstTag.Demux

    constructor(config?: Demux.ConstructorProperties) 
    _init(config?: Demux.ConstructorProperties): void
}

export interface DemuxClass {

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
export abstract class DemuxClass {

    // Own properties of GstTag-0.10.GstTag.DemuxClass

    static name: string
}

export interface DemuxPrivate {
}

export class DemuxPrivate {

    // Own properties of GstTag-0.10.GstTag.DemuxPrivate

    static name: string
}
