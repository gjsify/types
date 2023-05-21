
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gsttag-1.0-import.d.ts';
    
/**
 * GstTag-1.0
 */

import type GstBase from '@girs/node-gstbase-1.0';
import type Gst from '@girs/node-gst-1.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GModule from '@girs/node-gmodule-2.0';

/**
 * Result values from the parse_tag virtual function.
 */
export enum TagDemuxResult {
    /**
     * cannot parse tag, just skip it
     */
    BROKEN_TAG,
    /**
     * call again with less or more data
     */
    AGAIN,
    /**
     * parsed tag successfully
     */
    OK,
}
/**
 * Type of image contained in an image tag (specified as "image-type" field in
 * the info structure in the image's #GstSample)
 */
export enum TagImageType {
    /**
     * No image type. Can be used to
     *      tell functions such as gst_tag_image_data_to_image_sample() that no
     *      image type should be set.
     */
    NONE,
    /**
     * Undefined/other image type
     */
    UNDEFINED,
    /**
     * Cover (front)
     */
    FRONT_COVER,
    /**
     * Cover (back)
     */
    BACK_COVER,
    /**
     * Leaflet page
     */
    LEAFLET_PAGE,
    /**
     * Medium (e.g. label side of CD)
     */
    MEDIUM,
    /**
     * Lead artist/lead performer/soloist
     */
    LEAD_ARTIST,
    /**
     * Artist/performer
     */
    ARTIST,
    /**
     * Conductor
     */
    CONDUCTOR,
    /**
     * Band/orchestra
     */
    BAND_ORCHESTRA,
    /**
     * Composer
     */
    COMPOSER,
    /**
     * Lyricist/text writer
     */
    LYRICIST,
    /**
     * Recording location
     */
    RECORDING_LOCATION,
    /**
     * During recording
     */
    DURING_RECORDING,
    /**
     * During performance
     */
    DURING_PERFORMANCE,
    /**
     * Movie/video screen capture
     */
    VIDEO_CAPTURE,
    /**
     * A fish as funny as the ID3v2 spec
     */
    FISH,
    /**
     * Illustration
     */
    ILLUSTRATION,
    /**
     * Band/artist logotype
     */
    BAND_ARTIST_LOGO,
    /**
     * Publisher/studio logotype
     */
    PUBLISHER_STUDIO_LOGO,
}
/**
 * See http://creativecommons.org/ns for more information.
 * @bitfield 
 */
export enum TagLicenseFlags {
    /**
     * making multiple copies
     *     is allowed
     */
    PERMITS_REPRODUCTION,
    /**
     * distribution, public display
     *     and public performance are allowed
     */
    PERMITS_DISTRIBUTION,
    /**
     * distribution of derivative
     *     works is allowed
     */
    PERMITS_DERIVATIVE_WORKS,
    /**
     * commercial derivatives are allowed,
     *     but only non-commercial distribution is allowed
     */
    PERMITS_SHARING,
    /**
     * copyright and license notices
     *     must be kept intact
     */
    REQUIRES_NOTICE,
    /**
     * credit must be given to
     *     copyright holder and/or author
     */
    REQUIRES_ATTRIBUTION,
    /**
     * derivative works must be
     *     licensed under the same terms or compatible terms as the original work
     */
    REQUIRES_SHARE_ALIKE,
    /**
     * source code (the preferred
     *     form for making modifications) must be provided when exercising some
     *     rights granted by the license
     */
    REQUIRES_SOURCE_CODE,
    /**
     * derivative and combined works
     *     must be licensed under specified terms, similar to those of the original
     *     work
     */
    REQUIRES_COPYLEFT,
    /**
     * derivative works must be
     *     licensed under specified terms, with at least the same conditions as
     *     the original work; combinations with the work may be licensed under
     *     different terms
     */
    REQUIRES_LESSER_COPYLEFT,
    /**
     * exercising rights for
     *     commercial purposes is prohibited
     */
    PROHIBITS_COMMERCIAL_USE,
    /**
     * use in a
     *     non-developing country is prohibited
     */
    PROHIBITS_HIGH_INCOME_NATION_USE,
    /**
     * this license was created
     *     by the Creative Commons project
     */
    CREATIVE_COMMONS_LICENSE,
    /**
     * this license was
     *     created by the Free Software Foundation (FSF)
     */
    FREE_SOFTWARE_FOUNDATION_LICENSE,
}
/**
 * AcoustID Fingerprint (Chromaprint)
 */
export const TAG_ACOUSTID_FINGERPRINT: string | null
/**
 * AcoustID Identifier
 */
export const TAG_ACOUSTID_ID: string | null
/**
 * Direction of contrast processing applied when capturing an image. (string)
 * 
 * The allowed values are:
 *  "normal"
 *  "soft"
 *  "hard"
 */
export const TAG_CAPTURING_CONTRAST: string | null
/**
 * Digital zoom ratio used when capturing an image. (double)
 */
export const TAG_CAPTURING_DIGITAL_ZOOM_RATIO: string | null
/**
 * Exposure compensation using when capturing an image in EV. (double)
 */
export const TAG_CAPTURING_EXPOSURE_COMPENSATION: string | null
/**
 * Exposure mode used when capturing an image. (string)
 * 
 * The allowed values are:
 *   "auto-exposure"
 *   "manual-exposure"
 *   "auto-bracket"
 */
export const TAG_CAPTURING_EXPOSURE_MODE: string | null
/**
 * Type of exposure control used when capturing an image. (string)
 * 
 * The allowed values are:
 *   "undefined"
 *   "manual"
 *   "normal" - automatically controlled
 *   "aperture-priority" - user selects aperture value
 *   "shutter-priority" - user selects shutter speed
 *   "creative" - biased towards depth of field
 *   "action" - biased towards fast shutter speed
 *   "portrait" - closeup, leaving background out of focus
 *   "landscape" - landscape photos, background in focus
 */
export const TAG_CAPTURING_EXPOSURE_PROGRAM: string | null
/**
 * If flash was fired during the capture of an image. (boolean)
 * 
 * Note that if this tag isn't present, it should not be assumed that
 * the flash did not fire. It should be treated as unknown.
 */
export const TAG_CAPTURING_FLASH_FIRED: string | null
/**
 * The flash mode selected during the capture of an image. (string)
 * 
 * The allowed values are:
 *  "auto"
 *  "always"
 *  "never"
 */
export const TAG_CAPTURING_FLASH_MODE: string | null
/**
 * Focal length used when capturing an image, in mm. (double)
 */
export const TAG_CAPTURING_FOCAL_LENGTH: string | null
/**
 * 35 mm equivalent focal length used when capturing an image, in mm. (double)
 */
export const TAG_CAPTURING_FOCAL_LENGTH_35_MM: string | null
/**
 * Focal ratio (f-number) used when capturing an image. (double)
 * 
 * The value stored is the denominator of the focal ratio (f-number).
 * For example, if this tag value is 2, the focal ratio is f/2.
 */
export const TAG_CAPTURING_FOCAL_RATIO: string | null
/**
 * Gain adjustment applied to an image. (string)
 * 
 * The allowed values are:
 *   "none"
 *   "low-gain-up"
 *   "high-gain-up"
 *   "low-gain-down"
 *   "high-gain-down"
 */
export const TAG_CAPTURING_GAIN_ADJUSTMENT: string | null
/**
 * ISO speed used when capturing an image. (integer)
 */
export const TAG_CAPTURING_ISO_SPEED: string | null
/**
 * Defines the way a camera determines the exposure. (string)
 * 
 * The allowed values are:
 *   "unknown"
 *   "average"
 *   "center-weighted-average"
 *   "spot"
 *   "multi-spot"
 *   "pattern"
 *   "partial"
 *   "other"
 */
export const TAG_CAPTURING_METERING_MODE: string | null
/**
 * Direction of saturation processing applied when capturing an image. (string)
 * 
 * The allowed values are:
 *  "normal"
 *  "low-saturation"
 *  "high-saturation"
 */
export const TAG_CAPTURING_SATURATION: string | null
/**
 * Scene mode used when capturing an image. (string)
 * 
 * The allowed values are:
 *   "standard"
 *   "landscape"
 *   "portrait"
 *   "night-scene"
 */
export const TAG_CAPTURING_SCENE_CAPTURE_TYPE: string | null
/**
 * Direction of sharpness processing applied when capturing an image. (string)
 * 
 * The allowed values are:
 *  "normal"
 *  "soft"
 *  "hard"
 */
export const TAG_CAPTURING_SHARPNESS: string | null
/**
 * Shutter speed used when capturing an image, in seconds. (fraction)
 */
export const TAG_CAPTURING_SHUTTER_SPEED: string | null
/**
 * Indicates the source of capture. The device/medium used to do the
 * capture. (string)
 * 
 * Allowed values are:
 *   "dsc" (= digital still camera)
 *   "transparent-scanner"
 *   "reflex-scanner"
 *   "other"
 */
export const TAG_CAPTURING_SOURCE: string | null
/**
 * White balance mode used when capturing an image. (string)
 * 
 * The allowed values are:
 *   "auto"
 *   "manual"
 *   "daylight"
 *   "cloudy"
 *   "tungsten"
 *   "fluorescent"
 *   "fluorescent h" (newer daylight-calibrated fluorescents)
 *   "flash"
 */
export const TAG_CAPTURING_WHITE_BALANCE: string | null
/**
 * CDDB disc id in its short form (e.g. 'aa063d0f')
 */
export const TAG_CDDA_CDDB_DISCID: string | null
/**
 * CDDB disc id including all details
 */
export const TAG_CDDA_CDDB_DISCID_FULL: string | null
/**
 * Musicbrainz disc id (e.g. 'ahg7JUcfR3vCYBphSDIogOOWrr0-')
 */
export const TAG_CDDA_MUSICBRAINZ_DISCID: string | null
/**
 * Musicbrainz disc id details
 */
export const TAG_CDDA_MUSICBRAINZ_DISCID_FULL: string | null
/**
 * Annodex CMML clip element tag
 */
export const TAG_CMML_CLIP: string | null
/**
 * Annodex CMML head element tag
 */
export const TAG_CMML_HEAD: string | null
/**
 * Annodex CMML stream element tag
 */
export const TAG_CMML_STREAM: string | null
/**
 * ID3V2 header size considered minimum input for some functions such as
 * gst_tag_list_from_id3v2_tag() and gst_tag_get_id3v2_tag_size() for example.
 */
export const TAG_ID3V2_HEADER_SIZE: number
/**
 * Media (image/video) intended horizontal pixel density in ppi. (double)
 */
export const TAG_IMAGE_HORIZONTAL_PPI: string | null
/**
 * Media (image/video) intended vertical pixel density in ppi. (double)
 */
export const TAG_IMAGE_VERTICAL_PPI: string | null
/**
 * Musical key in which the sound starts. It is represented as a string
 * with a maximum length of three characters. The ground keys are
 * represented with "A","B","C","D","E", "F" and "G" and halfkeys
 * represented with "b" and "#". Minor is represented as "m" (e.g. "Dbm").
 * Off key is represented with an "o" only.
 * This notation might be extended in the future to support non-minor/major
 * keys.
 */
export const TAG_MUSICAL_KEY: string | null
/**
 * MusicBrainz album artist ID
 */
export const TAG_MUSICBRAINZ_ALBUMARTISTID: string | null
/**
 * MusicBrainz album ID
 */
export const TAG_MUSICBRAINZ_ALBUMID: string | null
/**
 * MusicBrainz artist ID
 */
export const TAG_MUSICBRAINZ_ARTISTID: string | null
/**
 * MusicBrainz Release Group ID
 */
export const TAG_MUSICBRAINZ_RELEASEGROUPID: string | null
/**
 * MusicBrainz Release Track ID
 */
export const TAG_MUSICBRAINZ_RELEASETRACKID: string | null
/**
 * MusicBrainz track ID
 */
export const TAG_MUSICBRAINZ_TRACKID: string | null
/**
 * MusicBrainz track TRM ID
 */
export const TAG_MUSICBRAINZ_TRMID: string | null
/**
 * Check if a given string contains a known ISO 639 language code.
 * 
 * This is useful in situations where it's not clear whether a given
 * string is a language code (which should be put into a #GST_TAG_LANGUAGE_CODE
 * tag) or a free-form language name descriptor (which should be put into a
 * #GST_TAG_LANGUAGE_NAME tag instead).
 * @param langCode ISO-639 language code (e.g. "deu" or "ger" or "de")
 * @returns TRUE if the two- or three-letter language code in @lang_code     is a valid ISO-639 language code.
 */
export function tagCheckLanguageCode(langCode: string | null): boolean
/**
 * Convenience function to read a string with unknown character encoding. If
 * the string is already in UTF-8 encoding, it will be returned right away.
 * If not it tries to detect byte-order-mark for UTF-16/32 cases and use that.
 * Otherwise, the environment will be searched for a number of environment
 * variables (whose names are specified in the NULL-terminated string array
 * `env_vars)` containing a list of character encodings to try/use. If none
 * are specified, the current locale will be tried. If that also doesn't work,
 * WINDOWS-1252/ISO-8859-1 is assumed (which will almost always succeed).
 * @param data string data
 * @param envVars     a NULL-terminated string array of environment variable names, or NULL
 * @returns a newly-allocated string in UTF-8 encoding, or NULL
 */
export function tagFreeformStringToUtf8(data: number[], envVars: string[]): string | null
/**
 * Looks up the GStreamer tag for a ID3v2 tag.
 * @param id3Tag ID3v2 tag to convert to GStreamer tag
 * @returns The corresponding GStreamer tag or NULL if none exists.
 */
export function tagFromId3Tag(id3Tag: string | null): string | null
/**
 * Looks up the GStreamer tag for an ID3v2 user tag (e.g. description in
 * TXXX frame or owner in UFID frame).
 * @param type the type of ID3v2 user tag (e.g. "TXXX" or "UDIF")
 * @param id3UserTag ID3v2 user tag to convert to GStreamer tag
 * @returns The corresponding GStreamer tag or NULL if none exists.
 */
export function tagFromId3UserTag(type: string | null, id3UserTag: string | null): string | null
/**
 * Looks up the GStreamer tag for a vorbiscomment tag.
 * @param vorbisTag vorbiscomment tag to convert to GStreamer tag
 * @returns The corresponding GStreamer tag or NULL if none exists.
 */
export function tagFromVorbisTag(vorbisTag: string | null): string | null
/**
 * Determines size of an ID3v2 tag on buffer containing at least ID3v2 header,
 * i.e. at least #GST_TAG_ID3V2_HEADER_SIZE (10) bytes;
 * @param buffer buffer holding ID3v2 tag (or at least the start of one)
 * @returns Size of tag, or 0 if header is invalid or too small.
 */
export function tagGetId3v2TagSize(buffer: Gst.Buffer): number
/**
 * Returns two-letter ISO-639-1 language code given a three-letter ISO-639-2
 * language code or two-letter ISO-639-1 language code (both are accepted for
 * convenience).
 * 
 * Language codes are case-sensitive and expected to be lower case.
 * @param langCode ISO-639 language code (e.g. "deu" or "ger" or "de")
 * @returns two-letter ISO-639-1 language code string that maps to @lang_code,     or NULL if no mapping is known. The returned string must not be     modified or freed.
 */
export function tagGetLanguageCodeIso6391(langCode: string | null): string | null
/**
 * Returns three-letter ISO-639-2 "bibliographic" language code given a
 * two-letter ISO-639-1 language code or a three-letter ISO-639-2 language
 * code (both are accepted for convenience).
 * 
 * The "bibliographic" code is derived from the English name of the language
 * (e.g. "ger" for German instead of "de" or "deu"). In most scenarios, the
 * "terminological" codes are preferred.
 * 
 * Language codes are case-sensitive and expected to be lower case.
 * @param langCode ISO-639 language code (e.g. "deu" or "ger" or "de")
 * @returns three-letter ISO-639-2 language code string that maps to @lang_code,     or NULL if no mapping is known. The returned string must not be     modified or freed.
 */
export function tagGetLanguageCodeIso6392B(langCode: string | null): string | null
/**
 * Returns three-letter ISO-639-2 "terminological" language code given a
 * two-letter ISO-639-1 language code or a three-letter ISO-639-2 language
 * code (both are accepted for convenience).
 * 
 * The "terminological" code is derived from the local name of the language
 * (e.g. "deu" for German instead of "ger"). In most scenarios, the
 * "terminological" codes are preferred over the "bibliographic" ones.
 * 
 * Language codes are case-sensitive and expected to be lower case.
 * @param langCode ISO-639 language code (e.g. "deu" or "ger" or "de")
 * @returns three-letter ISO-639-2 language code string that maps to @lang_code,     or NULL if no mapping is known. The returned string must not be     modified or freed.
 */
export function tagGetLanguageCodeIso6392T(langCode: string | null): string | null
/**
 * Returns a list of known language codes (in form of two-letter ISO-639-1
 * codes). This is useful for UIs to build a list of available languages for
 * tagging purposes (e.g. to tag an audio track appropriately in a video or
 * audio editor).
 * @returns NULL-terminated string array with two-letter     language codes. Free with g_strfreev() when no longer needed.
 */
export function tagGetLanguageCodes(): string[]
/**
 * Returns the name of the language given an ISO-639 language code as
 * found in a GST_TAG_LANGUAGE_CODE tag. The name will be translated
 * according to the current locale (if the library was built against the
 * iso-codes package, otherwise the English name will be returned).
 * 
 * Language codes are case-sensitive and expected to be lower case.
 * @param languageCode two or three-letter ISO-639 language code
 * @returns language name in UTF-8 format, or NULL if @language_code could     not be mapped to a language name. The returned string must not be     modified and does not need to freed; it will stay valid until the     application is terminated.
 */
export function tagGetLanguageName(languageCode: string | null): string | null
/**
 * Get the description of a license, which is a translated description
 * of the license's main features.
 * @param licenseRef a license reference string in form of a URI,     e.g. "http://creativecommons.org/licenses/by-nc-nd/2.0/"
 * @returns the description of the license, or NULL if the license is unknown    or a description is not available.
 */
export function tagGetLicenseDescription(licenseRef: string | null): string | null
/**
 * Get the flags of a license, which describe most of the features of
 * a license in their most general form.
 * @param licenseRef a license reference string in form of a URI,     e.g. "http://creativecommons.org/licenses/by-nc-nd/2.0/"
 * @returns the flags of the license, or 0 if the license is unknown
 */
export function tagGetLicenseFlags(licenseRef: string | null): TagLicenseFlags
/**
 * Get the jurisdiction code of a license. This is usually a two-letter
 * ISO 3166-1 alpha-2 code, but there is also the special case of Scotland,
 * for which no code exists and which is thus represented as "scotland".
 * 
 * Known jurisdictions: ar, at, au, be, bg, br, ca, ch, cl, cn, co, de,
 * dk, es, fi, fr, hr, hu, il, in, it, jp, kr, mk, mt, mx, my, nl, pe, pl,
 * pt, scotland, se, si, tw, uk, us, za.
 * @param licenseRef a license reference string in form of a URI,     e.g. "http://creativecommons.org/licenses/by-nc-nd/2.0/"
 * @returns the jurisdiction code of the license, or NULL if the license is    unknown or is not specific to a particular jurisdiction.
 */
export function tagGetLicenseJurisdiction(licenseRef: string | null): string | null
/**
 * Get the nick name of a license, which is a short (untranslated) string
 * such as e.g. "CC BY-NC-ND 2.0 UK".
 * @param licenseRef a license reference string in form of a URI,     e.g. "http://creativecommons.org/licenses/by-nc-nd/2.0/"
 * @returns the nick name of the license, or NULL if the license is unknown
 */
export function tagGetLicenseNick(licenseRef: string | null): string | null
/**
 * Get the title of a license, which is a short translated description
 * of the license's features (generally not very pretty though).
 * @param licenseRef a license reference string in form of a URI,     e.g. "http://creativecommons.org/licenses/by-nc-nd/2.0/"
 * @returns the title of the license, or NULL if the license is unknown or    no title is available.
 */
export function tagGetLicenseTitle(licenseRef: string | null): string | null
/**
 * Get the version of a license.
 * @param licenseRef a license reference string in form of a URI,     e.g. "http://creativecommons.org/licenses/by-nc-nd/2.0/"
 * @returns the version of the license, or NULL if the license is not known or    has no version
 */
export function tagGetLicenseVersion(licenseRef: string | null): string | null
/**
 * Returns a list of known license references (in form of URIs). This is
 * useful for UIs to build a list of available licenses for tagging purposes
 * (e.g. to tag an audio track appropriately in a video or audio editor, or
 * an image in a camera application).
 * @returns NULL-terminated array of license strings. Free     with g_strfreev() when no longer needed.
 */
export function tagGetLicenses(): string[]
/**
 * Gets the number of ID3v1 genres that can be identified. Winamp genres are
 * included.
 * @returns the number of ID3v1 genres that can be identified
 */
export function tagId3GenreCount(): number
/**
 * Gets the ID3v1 genre name for a given ID.
 * @param id ID of genre to query
 * @returns the genre or NULL if no genre is associated with that ID.
 */
export function tagId3GenreGet(id: number): string | null
/**
 * Helper function for tag-reading plugins to create a #GstSample suitable to
 * add to a #GstTagList as an image tag (such as #GST_TAG_IMAGE or
 * #GST_TAG_PREVIEW_IMAGE) from the encoded image data and an (optional) image
 * type.
 * 
 * Background: cover art and other images in tags are usually stored as a
 * blob of binary image data, often accompanied by a MIME type or some other
 * content type string (e.g. 'png', 'jpeg', 'jpg'). Sometimes there is also an
 * 'image type' to indicate what kind of image this is (e.g. front cover,
 * back cover, artist, etc.). The image data may also be an URI to the image
 * rather than the image itself.
 * 
 * In GStreamer, image tags are #GstSample<!-- -->s containing the raw image
 * data, with the sample caps describing the content type of the image
 * (e.g. image/jpeg, image/png, text/uri-list). The sample info may contain
 * an additional 'image-type' field of #GstTagImageType to describe
 * the type of image (front cover, back cover etc.). #GST_TAG_PREVIEW_IMAGE
 * tags should not carry an image type, their type is already indicated via
 * the special tag name.
 * 
 * This function will do various checks and typefind the encoded image
 * data (we can't trust the declared mime type).
 * @param imageData the (encoded) image
 * @param imageType type of the image, or #GST_TAG_IMAGE_TYPE_UNDEFINED. Pass     #GST_TAG_IMAGE_TYPE_NONE if no image type should be set at all (e.g.     for preview images)
 * @returns a newly-allocated image sample for use in tag lists, or NULL
 */
export function tagImageDataToImageSample(imageData: Uint8Array, imageType: TagImageType): Gst.Sample | null
/**
 * Adds an image from an ID3 APIC frame (or similar, such as used in FLAC)
 * to the given tag list. Also see gst_tag_image_data_to_image_sample() for
 * more information on image tags in GStreamer.
 * @param tagList a tag list
 * @param imageData the (encoded) image
 * @param id3PictureType picture type as per the ID3 (v2.4.0) specification for    the APIC frame (0 = unknown/other)
 * @returns %TRUE if the image was processed, otherwise %FALSE
 */
export function tagListAddId3Image(tagList: Gst.TagList, imageData: Uint8Array, id3PictureType: number): boolean
/**
 * Parses the IFD and IFD tags data contained in the buffer and puts it
 * on a taglist. The base_offset is used to subtract from the offset in
 * the tag entries and be able to get the offset relative to the buffer
 * start
 * @param buffer The exif buffer
 * @param byteOrder byte order of the data
 * @param baseOffset Offset from the tiff header to this buffer
 * @returns The parsed taglist
 */
export function tagListFromExifBuffer(buffer: Gst.Buffer, byteOrder: number, baseOffset: number): Gst.TagList
/**
 * Parses the exif tags starting with a tiff header structure.
 * @param buffer The exif buffer
 * @returns The taglist
 */
export function tagListFromExifBufferWithTiffHeader(buffer: Gst.Buffer): Gst.TagList
/**
 * Creates a new tag list that contains the information parsed out of a
 * ID3 tag.
 * @param buffer buffer to convert
 * @returns A new #GstTagList with all tags that could be extracted from the          given vorbiscomment buffer or NULL on error.
 */
export function tagListFromId3v2Tag(buffer: Gst.Buffer): Gst.TagList | null
/**
 * Creates a new tag list that contains the information parsed out of a
 * vorbiscomment packet.
 * @param data data to convert
 * @param idData identification data at start of stream
 * @returns A new #GstTagList with all tags that could be extracted from the          given vorbiscomment buffer or NULL on error.
 */
export function tagListFromVorbiscomment(data: Uint8Array, idData: Uint8Array): [ /* returnType */ Gst.TagList | null, /* vendorString */ string | null ]
/**
 * Creates a new tag list that contains the information parsed out of a
 * vorbiscomment packet.
 * @param buffer buffer to convert
 * @param idData identification data at start of stream
 * @returns A new #GstTagList with all tags that could be extracted from the          given vorbiscomment buffer or NULL on error.
 */
export function tagListFromVorbiscommentBuffer(buffer: Gst.Buffer, idData: Uint8Array): [ /* returnType */ Gst.TagList | null, /* vendorString */ string | null ]
/**
 * Parse a xmp packet into a taglist.
 * @param buffer buffer
 * @returns new taglist or %NULL, free the list when done
 */
export function tagListFromXmpBuffer(buffer: Gst.Buffer): Gst.TagList | null
/**
 * Parses the data containing an ID3v1 tag and returns a #GstTagList from the
 * parsed data.
 * @param data 128 bytes of data containing the ID3v1 tag
 * @returns A new tag list or NULL if the data was not an ID3v1 tag.
 */
export function tagListNewFromId3v1(data: Uint8Array): Gst.TagList | null
/**
 * Formats the tags in taglist on exif format. The resulting buffer contains
 * the tags IFD and is followed by the data pointed by the tag entries.
 * @param taglist The taglist
 * @param byteOrder byte order used in writing (G_LITTLE_ENDIAN or G_BIG_ENDIAN)
 * @param baseOffset Offset from the tiff header first byte
 * @returns A GstBuffer containing the tag entries followed by the tag data
 */
export function tagListToExifBuffer(taglist: Gst.TagList, byteOrder: number, baseOffset: number): Gst.Buffer
/**
 * Formats the tags in taglist into exif structure, a tiff header
 * is put in the beginning of the buffer.
 * @param taglist The taglist
 * @returns A GstBuffer containing the data
 */
export function tagListToExifBufferWithTiffHeader(taglist: Gst.TagList): Gst.Buffer
/**
 * Creates a new vorbiscomment buffer from a tag list.
 * @param list tag list to convert
 * @param idData identification data at start of stream
 * @param vendorString string that describes the vendor string or NULL
 * @returns A new #GstBuffer containing a vorbiscomment buffer with all tags          that could be converted from the given tag list.
 */
export function tagListToVorbiscommentBuffer(list: Gst.TagList, idData: Uint8Array, vendorString: string | null): Gst.Buffer
/**
 * Formats a taglist as a xmp packet using only the selected
 * schemas. An empty list (%NULL) means that all schemas should
 * be used
 * @param list tags
 * @param readOnly does the container forbid inplace editing
 * @param schemas      %NULL terminated array of schemas to be used on serialization
 * @returns new buffer or %NULL, unref the buffer when done
 */
export function tagListToXmpBuffer(list: Gst.TagList, readOnly: boolean, schemas: string[]): Gst.Buffer | null
/**
 * Convenience function to parse a GST_TAG_EXTENDED_COMMENT string and
 * separate it into its components.
 * 
 * If successful, `key,` `lang` and/or `value` will be set to newly allocated
 * strings that you need to free with g_free() when done. `key` and `lang`
 * may also be set to NULL by this function if there is no key or no language
 * code in the extended comment string.
 * @param extComment an extended comment string, see #GST_TAG_EXTENDED_COMMENT
 * @param failIfNoKey whether to fail if strings are not in key=value form
 * @returns TRUE if the string could be parsed, otherwise FALSE
 */
export function tagParseExtendedComment(extComment: string | null, failIfNoKey: boolean): [ /* returnType */ boolean, /* key */ string | null, /* lang */ string | null, /* value */ string | null ]
/**
 * Registers additional musicbrainz-specific tags with the GStreamer tag
 * system. Plugins and applications that use these tags should call this
 * function before using them. Can be called multiple times.
 */
export function tagRegisterMusicbrainzTags(): void
/**
 * Looks up the ID3v2 tag for a GStreamer tag.
 * @param gstTag GStreamer tag to convert to vorbiscomment tag
 * @returns The corresponding ID3v2 tag or NULL if none exists.
 */
export function tagToId3Tag(gstTag: string | null): string | null
/**
 * Creates a new tag list that contains the information parsed out of a
 * vorbiscomment packet.
 * @param list a #GstTagList
 * @param tag a GStreamer tag identifier, such as #GST_TAG_ARTIST
 * @returns A #GList of newly-allocated     key=value strings. Free with g_list_foreach (list, (GFunc) g_free, NULL)     plus g_list_free (list)
 */
export function tagToVorbisComments(list: Gst.TagList, tag: string | null): string[]
/**
 * Looks up the vorbiscomment tag for a GStreamer tag.
 * @param gstTag GStreamer tag to convert to vorbiscomment tag
 * @returns The corresponding vorbiscomment tag or NULL if none exists.
 */
export function tagToVorbisTag(gstTag: string | null): string | null
/**
 * Gets the list of supported schemas in the xmp lib
 * @returns a %NULL terminated array of strings with the     schema names
 */
export function tagXmpListSchemas(): string[]
/**
 * Convenience function using gst_tag_from_vorbis_tag(), parsing
 * a vorbis comment string into the right type and adding it to the
 * given taglist `list`.
 * 
 * Unknown vorbiscomment tags will be added to the tag list in form
 * of a #GST_TAG_EXTENDED_COMMENT.
 * @param list a #GstTagList
 * @param tag a vorbiscomment tag string (key in key=value), must be valid UTF-8
 * @param value a vorbiscomment value string (value in key=value), must be valid UTF-8
 */
export function vorbisTagAdd(list: Gst.TagList, tag: string | null, value: string | null): void
export module TagXmpWriter {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Element.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface TagXmpWriter extends Gst.Element {

    // Own properties of GstTag-1.0.GstTag.TagXmpWriter

    __gtype__: number

    // Conflicting properties

    object: any

    // Owm methods of GstTag-1.0.GstTag.TagXmpWriter

    /**
     * Adds all available XMP schemas to the configuration. Meaning that
     * all will be used.
     */
    addAllSchemas(): void
    /**
     * Adds `schema` to the list schemas
     * @param schema the schema to be added
     */
    addSchema(schema: string | null): void
    /**
     * Checks if `schema` is going to be used
     * @param schema the schema to test
     * @returns %TRUE if it is going to be used
     */
    hasSchema(schema: string | null): boolean
    /**
     * Removes all schemas from the list of schemas to use. Meaning that no
     * XMP will be generated.
     */
    removeAllSchemas(): void
    /**
     * Removes a schema from the list of schemas to use. Nothing is done if
     * the schema wasn't in the list
     * @param schema the schema to remove
     */
    removeSchema(schema: string | null): void
    tagListToXmpBuffer(taglist: Gst.TagList, readOnly: boolean): Gst.Buffer

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstTag-1.0.GstTag.TagXmpWriter

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
 * This interface is implemented by elements that are able to do XMP serialization. Examples for
 * such elements are #jifmux and #qtmux.
 * 
 * Applications can use this interface to configure which XMP schemas should be used when serializing
 * tags into XMP. Schemas are represented by their names, a full list of the supported schemas can be
 * obtained from gst_tag_xmp_list_schemas(). By default, all schemas are used.
 * @interface 
 */
export class TagXmpWriter extends GObject.Object {

    // Own properties of GstTag-1.0.GstTag.TagXmpWriter

    static name: string

    // Constructors of GstTag-1.0.GstTag.TagXmpWriter

    constructor(config?: TagXmpWriter.ConstructorProperties) 
    _init(config?: TagXmpWriter.ConstructorProperties): void
}

export module TagDemux {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {
    }

}

export interface TagDemux {

    // Own properties of GstTag-1.0.GstTag.TagDemux

    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstTag-1.0.GstTag.TagDemux

    /**
     * parent element
     * @field 
     */
    element: Gst.Element

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstTag-1.0.GstTag.TagDemux

    identifyTag(buffer: Gst.Buffer, startTag: boolean, tagSize: number): boolean
    mergeTags(startTags: Gst.TagList, endTags: Gst.TagList): Gst.TagList
    parseTag(buffer: Gst.Buffer, startTag: boolean, tagSize: number, tags: Gst.TagList): TagDemuxResult

    // Class property signals of GstTag-1.0.GstTag.TagDemux

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
 * Provides a base class for demuxing tags at the beginning or end of a
 * stream and handles things like typefinding, querying, seeking, and
 * different modes of operation (chain-based, pull_range-based, and providing
 * downstream elements with random access if upstream supports that). The tag
 * is stripped from the output, and all offsets are adjusted for the tag
 * sizes, so that to the downstream element the stream will appear as if
 * there was no tag at all. Also, once the tag has been parsed, GstTagDemux
 * will try to determine the media type of the resulting stream and add a
 * source pad with the appropriate caps in order to facilitate auto-plugging.
 * 
 * ## Deriving from GstTagDemux
 * 
 * Subclasses have to do four things:
 * 
 *  * In their base init function, they must add a pad template for the sink
 *    pad to the element class, describing the media type they can parse in
 *    the caps of the pad template.
 *  * In their class init function, they must override
 *    GST_TAG_DEMUX_CLASS(demux_klass)->identify_tag with their own identify
 *    function.
 *  * In their class init function, they must override
 *  GST_TAG_DEMUX_CLASS(demux_klass)->parse_tag with their own parse
 *  function.
 *  * In their class init function, they must also set
 *    GST_TAG_DEMUX_CLASS(demux_klass)->min_start_size and/or
 *  GST_TAG_DEMUX_CLASS(demux_klass)->min_end_size to the minimum size required
 *  for the identify function to decide whether the stream has a supported tag
 *  or not. A class parsing ID3v1 tags, for example, would set min_end_size to
 *  128 bytes.
 * @class 
 */
export class TagDemux extends Gst.Element {

    // Own properties of GstTag-1.0.GstTag.TagDemux

    static name: string

    // Constructors of GstTag-1.0.GstTag.TagDemux

    constructor(config?: TagDemux.ConstructorProperties) 
    _init(config?: TagDemux.ConstructorProperties): void
}

export module TagMux {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.TagSetter.ConstructorProperties, Gst.Element.ConstructorProperties {
    }

}

export interface TagMux extends Gst.TagSetter {

    // Own properties of GstTag-1.0.GstTag.TagMux

    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstTag-1.0.GstTag.TagMux

    /**
     * parent element
     * @field 
     */
    element: Gst.Element

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstTag-1.0.GstTag.TagMux

    renderEndTag(tagList: Gst.TagList): Gst.Buffer
    renderStartTag(tagList: Gst.TagList): Gst.Buffer

    // Class property signals of GstTag-1.0.GstTag.TagMux

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
 * Provides a base class for adding tags at the beginning or end of a
 * stream.
 * 
 * ## Deriving from GstTagMux
 * 
 * Subclasses have to do the following things:
 * 
 *  * In their base init function, they must add pad templates for the sink
 *    pad and the source pad to the element class, describing the media type
 *    they accept and output in the caps of the pad template.
 *  * In their class init function, they must override the
 *    GST_TAG_MUX_CLASS(mux_klass)->render_start_tag and/or
 *    GST_TAG_MUX_CLASS(mux_klass)->render_end_tag vfuncs and set up a render
 *    function.
 * @class 
 */
export class TagMux extends Gst.Element {

    // Own properties of GstTag-1.0.GstTag.TagMux

    static name: string

    // Constructors of GstTag-1.0.GstTag.TagMux

    constructor(config?: TagMux.ConstructorProperties) 
    _init(config?: TagMux.ConstructorProperties): void
}

export interface TagDemuxClass {

    // Own fields of GstTag-1.0.GstTag.TagDemuxClass

    /**
     * the parent class.
     * @field 
     */
    parentClass: Gst.ElementClass
    /**
     * minimum size required to identify a tag at the start and
     * determine its total size. Set to 0 if not interested in start tags.
     * Subclasses should set this in their class_init function.
     * @field 
     */
    minStartSize: number
    /**
     * minimum size required to identify a tag at the end and
     * determine its total size. Set to 0 if not interested in end tags.
     * Subclasses should set this in their class_init function.
     * @field 
     */
    minEndSize: number
    identifyTag: (demux: TagDemux, buffer: Gst.Buffer, startTag: boolean, tagSize: number) => boolean
    parseTag: (demux: TagDemux, buffer: Gst.Buffer, startTag: boolean, tagSize: number, tags: Gst.TagList) => TagDemuxResult
    mergeTags: (demux: TagDemux, startTags: Gst.TagList, endTags: Gst.TagList) => Gst.TagList
}

/**
 * The #GstTagDemuxClass structure.  See documentation at beginning of section
 * for details about what subclasses need to override and do.
 * @record 
 */
export abstract class TagDemuxClass {

    // Own properties of GstTag-1.0.GstTag.TagDemuxClass

    static name: string
}

export interface TagDemuxPrivate {
}

export class TagDemuxPrivate {

    // Own properties of GstTag-1.0.GstTag.TagDemuxPrivate

    static name: string
}

export interface TagMuxClass {

    // Own fields of GstTag-1.0.GstTag.TagMuxClass

    /**
     * the parent class.
     * @field 
     */
    parentClass: Gst.ElementClass
    renderStartTag: (mux: TagMux, tagList: Gst.TagList) => Gst.Buffer
    renderEndTag: (mux: TagMux, tagList: Gst.TagList) => Gst.Buffer
}

/**
 * The #GstTagMuxClass structure. Subclasses need to override at least one
 * of the two render vfuncs.
 * @record 
 */
export abstract class TagMuxClass {

    // Own properties of GstTag-1.0.GstTag.TagMuxClass

    static name: string
}

export interface TagMuxPrivate {
}

export class TagMuxPrivate {

    // Own properties of GstTag-1.0.GstTag.TagMuxPrivate

    static name: string
}

export interface TagXmpWriterInterface {

    // Own fields of GstTag-1.0.GstTag.TagXmpWriterInterface

    parent: GObject.TypeInterface
}

export abstract class TagXmpWriterInterface {

    // Own properties of GstTag-1.0.GstTag.TagXmpWriterInterface

    static name: string
}

// END