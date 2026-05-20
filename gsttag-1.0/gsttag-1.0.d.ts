
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
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstTag {

    /**
     * GstTag-1.0
     */


    /**
     * @gir-type Enum
     */
    export namespace TagDemuxResult {
        export const $gtype: GObject.GType<TagDemuxResult>;
    }

    /**
     * Result values from the parse_tag virtual function.
     * @gir-type Enum
     */
    enum TagDemuxResult {
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
     * @gir-type Enum
     */
    export namespace TagImageType {
        export const $gtype: GObject.GType<TagImageType>;
    }

    /**
     * Type of image contained in an image tag (specified as "image-type" field in
     * the info structure in the image's {@link Gst.Sample})
     * @gir-type Enum
     */
    enum TagImageType {
        /**
         * No image type. Can be used to
         *      tell functions such as `gst_tag_image_data_to_image_sample()` that no
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
     * AcoustID Fingerprint (Chromaprint)
     * @since 1.18
     */
    const TAG_ACOUSTID_FINGERPRINT: string;

    /**
     * AcoustID Identifier
     * @since 1.18
     */
    const TAG_ACOUSTID_ID: string;

    /**
     * Direction of contrast processing applied when capturing an image. (string)
     * 
     * The allowed values are:
     *  "normal"
     *  "soft"
     *  "hard"
     */
    const TAG_CAPTURING_CONTRAST: string;

    /**
     * Digital zoom ratio used when capturing an image. (double)
     */
    const TAG_CAPTURING_DIGITAL_ZOOM_RATIO: string;

    /**
     * Exposure compensation using when capturing an image in EV. (double)
     */
    const TAG_CAPTURING_EXPOSURE_COMPENSATION: string;

    /**
     * Exposure mode used when capturing an image. (string)
     * 
     * The allowed values are:
     *   "auto-exposure"
     *   "manual-exposure"
     *   "auto-bracket"
     */
    const TAG_CAPTURING_EXPOSURE_MODE: string;

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
    const TAG_CAPTURING_EXPOSURE_PROGRAM: string;

    /**
     * If flash was fired during the capture of an image. (boolean)
     * 
     * Note that if this tag isn't present, it should not be assumed that
     * the flash did not fire. It should be treated as unknown.
     */
    const TAG_CAPTURING_FLASH_FIRED: string;

    /**
     * The flash mode selected during the capture of an image. (string)
     * 
     * The allowed values are:
     *  "auto"
     *  "always"
     *  "never"
     */
    const TAG_CAPTURING_FLASH_MODE: string;

    /**
     * Focal length used when capturing an image, in mm. (double)
     */
    const TAG_CAPTURING_FOCAL_LENGTH: string;

    /**
     * 35 mm equivalent focal length used when capturing an image, in mm. (double)
     * @since 1.10
     */
    const TAG_CAPTURING_FOCAL_LENGTH_35_MM: string;

    /**
     * Focal ratio (f-number) used when capturing an image. (double)
     * 
     * The value stored is the denominator of the focal ratio (f-number).
     * For example, if this tag value is 2, the focal ratio is f/2.
     */
    const TAG_CAPTURING_FOCAL_RATIO: string;

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
    const TAG_CAPTURING_GAIN_ADJUSTMENT: string;

    /**
     * ISO speed used when capturing an image. (integer)
     */
    const TAG_CAPTURING_ISO_SPEED: string;

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
    const TAG_CAPTURING_METERING_MODE: string;

    /**
     * Direction of saturation processing applied when capturing an image. (string)
     * 
     * The allowed values are:
     *  "normal"
     *  "low-saturation"
     *  "high-saturation"
     */
    const TAG_CAPTURING_SATURATION: string;

    /**
     * Scene mode used when capturing an image. (string)
     * 
     * The allowed values are:
     *   "standard"
     *   "landscape"
     *   "portrait"
     *   "night-scene"
     */
    const TAG_CAPTURING_SCENE_CAPTURE_TYPE: string;

    /**
     * Direction of sharpness processing applied when capturing an image. (string)
     * 
     * The allowed values are:
     *  "normal"
     *  "soft"
     *  "hard"
     */
    const TAG_CAPTURING_SHARPNESS: string;

    /**
     * Shutter speed used when capturing an image, in seconds. (fraction)
     */
    const TAG_CAPTURING_SHUTTER_SPEED: string;

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
    const TAG_CAPTURING_SOURCE: string;

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
    const TAG_CAPTURING_WHITE_BALANCE: string;

    /**
     * CDDB disc id in its short form (e.g. 'aa063d0f')
     */
    const TAG_CDDA_CDDB_DISCID: string;

    /**
     * CDDB disc id including all details
     */
    const TAG_CDDA_CDDB_DISCID_FULL: string;

    /**
     * Musicbrainz disc id (e.g. 'ahg7JUcfR3vCYBphSDIogOOWrr0-')
     */
    const TAG_CDDA_MUSICBRAINZ_DISCID: string;

    /**
     * Musicbrainz disc id details
     */
    const TAG_CDDA_MUSICBRAINZ_DISCID_FULL: string;

    /**
     * Annodex CMML clip element tag
     */
    const TAG_CMML_CLIP: string;

    /**
     * Annodex CMML head element tag
     */
    const TAG_CMML_HEAD: string;

    /**
     * Annodex CMML stream element tag
     */
    const TAG_CMML_STREAM: string;

    /**
     * ID3V2 header size considered minimum input for some functions such as
     * `gst_tag_list_from_id3v2_tag()` and `gst_tag_get_id3v2_tag_size()` for example.
     */
    const TAG_ID3V2_HEADER_SIZE: number;

    /**
     * Media (image/video) intended horizontal pixel density in ppi. (double)
     */
    const TAG_IMAGE_HORIZONTAL_PPI: string;

    /**
     * Media (image/video) intended vertical pixel density in ppi. (double)
     */
    const TAG_IMAGE_VERTICAL_PPI: string;

    /**
     * Musical key in which the sound starts. It is represented as a string
     * with a maximum length of three characters. The ground keys are
     * represented with "A","B","C","D","E", "F" and "G" and halfkeys
     * represented with "b" and "#". Minor is represented as "m" (e.g. "Dbm").
     * Off key is represented with an "o" only.
     * This notation might be extended in the future to support non-minor/major
     * keys.
     * @since 1.2
     */
    const TAG_MUSICAL_KEY: string;

    /**
     * MusicBrainz album artist ID
     */
    const TAG_MUSICBRAINZ_ALBUMARTISTID: string;

    /**
     * MusicBrainz album ID
     */
    const TAG_MUSICBRAINZ_ALBUMID: string;

    /**
     * MusicBrainz artist ID
     */
    const TAG_MUSICBRAINZ_ARTISTID: string;

    /**
     * MusicBrainz Release Group ID
     * @since 1.18
     */
    const TAG_MUSICBRAINZ_RELEASEGROUPID: string;

    /**
     * MusicBrainz Release Track ID
     * @since 1.18
     */
    const TAG_MUSICBRAINZ_RELEASETRACKID: string;

    /**
     * MusicBrainz track ID
     */
    const TAG_MUSICBRAINZ_TRACKID: string;

    /**
     * MusicBrainz track TRM ID
     */
    const TAG_MUSICBRAINZ_TRMID: string;

    /**
     * Check if a given string contains a known ISO 639 language code.
     * 
     * This is useful in situations where it's not clear whether a given
     * string is a language code (which should be put into a #GST_TAG_LANGUAGE_CODE
     * tag) or a free-form language name descriptor (which should be put into a
     * #GST_TAG_LANGUAGE_NAME tag instead).
     * @param lang_code ISO-639 language code (e.g. "deu" or "ger" or "de")
     * @returns TRUE if the two- or three-letter language code in `lang_code`     is a valid ISO-639 language code.
     */
    function tag_check_language_code(lang_code: string): boolean;

    /**
     * Convenience function to read a string with unknown character encoding. If
     * the string is already in UTF-8 encoding, it will be returned right away.
     * If not it tries to detect byte-order-mark for UTF-16/32 cases and use that.
     * Otherwise, the environment will be searched for a number of environment
     * variables (whose names are specified in the NULL-terminated string array
     * `env_vars`) containing a list of character encodings to try/use. If none
     * are specified, the current locale will be tried. If that also doesn't work,
     * WINDOWS-1252/ISO-8859-1 is assumed (which will almost always succeed).
     * @param data string data
     * @param env_vars a NULL-terminated string array of environment variable names, or NULL
     * @returns a newly-allocated string in UTF-8 encoding, or NULL
     */
    function tag_freeform_string_to_utf8(data: number[], env_vars: string[]): string | null;

    /**
     * Looks up the GStreamer tag for a ID3v2 tag.
     * @param id3_tag ID3v2 tag to convert to GStreamer tag
     * @returns The corresponding GStreamer tag or NULL if none exists.
     */
    function tag_from_id3_tag(id3_tag: string): string | null;

    /**
     * Looks up the GStreamer tag for an ID3v2 user tag (e.g. description in
     * TXXX frame or owner in UFID frame).
     * @param type the type of ID3v2 user tag (e.g. "TXXX" or "UDIF")
     * @param id3_user_tag ID3v2 user tag to convert to GStreamer tag
     * @returns The corresponding GStreamer tag or NULL if none exists.
     */
    function tag_from_id3_user_tag(type: string, id3_user_tag: string): string | null;

    /**
     * Looks up the GStreamer tag for a vorbiscomment tag.
     * @param vorbis_tag vorbiscomment tag to convert to GStreamer tag
     * @returns The corresponding GStreamer tag or NULL if none exists.
     */
    function tag_from_vorbis_tag(vorbis_tag: string): string | null;

    /**
     * Determines size of an ID3v2 tag on buffer containing at least ID3v2 header,
     * i.e. at least #GST_TAG_ID3V2_HEADER_SIZE (10) bytes;
     * @param buffer buffer holding ID3v2 tag (or at least the start of one)
     * @returns Size of tag, or 0 if header is invalid or too small.
     */
    function tag_get_id3v2_tag_size(buffer: Gst.Buffer): number;

    /**
     * Returns two-letter ISO-639-1 language code given a three-letter ISO-639-2
     * language code or two-letter ISO-639-1 language code (both are accepted for
     * convenience).
     * 
     * Language codes are case-sensitive and expected to be lower case.
     * @param lang_code ISO-639 language code (e.g. "deu" or "ger" or "de")
     * @returns two-letter ISO-639-1 language code string that maps to `lang_code`,     or NULL if no mapping is known. The returned string must not be     modified or freed.
     */
    function tag_get_language_code_iso_639_1(lang_code: string): string | null;

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
     * @param lang_code ISO-639 language code (e.g. "deu" or "ger" or "de")
     * @returns three-letter ISO-639-2 language code string that maps to `lang_code`,     or NULL if no mapping is known. The returned string must not be     modified or freed.
     */
    function tag_get_language_code_iso_639_2B(lang_code: string): string | null;

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
     * @param lang_code ISO-639 language code (e.g. "deu" or "ger" or "de")
     * @returns three-letter ISO-639-2 language code string that maps to `lang_code`,     or NULL if no mapping is known. The returned string must not be     modified or freed.
     */
    function tag_get_language_code_iso_639_2T(lang_code: string): string | null;

    /**
     * Returns a list of known language codes (in form of two-letter ISO-639-1
     * codes). This is useful for UIs to build a list of available languages for
     * tagging purposes (e.g. to tag an audio track appropriately in a video or
     * audio editor).
     * @returns NULL-terminated string array with two-letter     language codes. Free with `g_strfreev()` when no longer needed.
     */
    function tag_get_language_codes(): string[];

    /**
     * Returns the name of the language given an ISO-639 language code as
     * found in a GST_TAG_LANGUAGE_CODE tag. The name will be translated
     * according to the current locale (if the library was built against the
     * iso-codes package, otherwise the English name will be returned).
     * 
     * Language codes are case-sensitive and expected to be lower case.
     * @param language_code two or three-letter ISO-639 language code
     * @returns language name in UTF-8 format, or NULL if `language_code` could     not be mapped to a language name. The returned string must not be     modified and does not need to freed; it will stay valid until the     application is terminated.
     */
    function tag_get_language_name(language_code: string): string | null;

    /**
     * Get the description of a license, which is a translated description
     * of the license's main features.
     * @param license_ref a license reference string in form of a URI,     e.g. "http://creativecommons.org/licenses/by-nc-nd/2.0/"
     * @returns the description of the license, or NULL if the license is unknown    or a description is not available.
     */
    function tag_get_license_description(license_ref: string): string | null;

    /**
     * Get the flags of a license, which describe most of the features of
     * a license in their most general form.
     * @param license_ref a license reference string in form of a URI,     e.g. "http://creativecommons.org/licenses/by-nc-nd/2.0/"
     * @returns the flags of the license, or 0 if the license is unknown
     */
    function tag_get_license_flags(license_ref: string): TagLicenseFlags;

    /**
     * Get the jurisdiction code of a license. This is usually a two-letter
     * ISO 3166-1 alpha-2 code, but there is also the special case of Scotland,
     * for which no code exists and which is thus represented as "scotland".
     * 
     * Known jurisdictions: ar, at, au, be, bg, br, ca, ch, cl, cn, co, de,
     * dk, es, fi, fr, hr, hu, il, in, it, jp, kr, mk, mt, mx, my, nl, pe, pl,
     * pt, scotland, se, si, tw, uk, us, za.
     * @param license_ref a license reference string in form of a URI,     e.g. "http://creativecommons.org/licenses/by-nc-nd/2.0/"
     * @returns the jurisdiction code of the license, or NULL if the license is    unknown or is not specific to a particular jurisdiction.
     */
    function tag_get_license_jurisdiction(license_ref: string): string | null;

    /**
     * Get the nick name of a license, which is a short (untranslated) string
     * such as e.g. "CC BY-NC-ND 2.0 UK".
     * @param license_ref a license reference string in form of a URI,     e.g. "http://creativecommons.org/licenses/by-nc-nd/2.0/"
     * @returns the nick name of the license, or NULL if the license is unknown
     */
    function tag_get_license_nick(license_ref: string): string | null;

    /**
     * Get the title of a license, which is a short translated description
     * of the license's features (generally not very pretty though).
     * @param license_ref a license reference string in form of a URI,     e.g. "http://creativecommons.org/licenses/by-nc-nd/2.0/"
     * @returns the title of the license, or NULL if the license is unknown or    no title is available.
     */
    function tag_get_license_title(license_ref: string): string | null;

    /**
     * Get the version of a license.
     * @param license_ref a license reference string in form of a URI,     e.g. "http://creativecommons.org/licenses/by-nc-nd/2.0/"
     * @returns the version of the license, or NULL if the license is not known or    has no version
     */
    function tag_get_license_version(license_ref: string): string | null;

    /**
     * Returns a list of known license references (in form of URIs). This is
     * useful for UIs to build a list of available licenses for tagging purposes
     * (e.g. to tag an audio track appropriately in a video or audio editor, or
     * an image in a camera application).
     * @returns NULL-terminated array of license strings. Free     with `g_strfreev()` when no longer needed.
     */
    function tag_get_licenses(): string[];

    /**
     * Gets the number of ID3v1 genres that can be identified. Winamp genres are
     * included.
     * @returns the number of ID3v1 genres that can be identified
     */
    function tag_id3_genre_count(): number;

    /**
     * Gets the ID3v1 genre name for a given ID.
     * @param id ID of genre to query
     * @returns the genre or NULL if no genre is associated with that ID.
     */
    function tag_id3_genre_get(id: number): string | null;

    /**
     * Helper function for tag-reading plugins to create a {@link Gst.Sample} suitable to
     * add to a {@link Gst.TagList} as an image tag (such as #GST_TAG_IMAGE or
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
     * In GStreamer, image tags are {@link Gst.Sample}<!-- -->s containing the raw image
     * data, with the sample caps describing the content type of the image
     * (e.g. image/jpeg, image/png, text/uri-list). The sample info may contain
     * an additional 'image-type' field of {@link GstTag.TagImageType} to describe
     * the type of image (front cover, back cover etc.). #GST_TAG_PREVIEW_IMAGE
     * tags should not carry an image type, their type is already indicated via
     * the special tag name.
     * 
     * This function will do various checks and typefind the encoded image
     * data (we can't trust the declared mime type).
     * @param image_data the (encoded) image
     * @param image_type type of the image, or #GST_TAG_IMAGE_TYPE_UNDEFINED. Pass     #GST_TAG_IMAGE_TYPE_NONE if no image type should be set at all (e.g.     for preview images)
     * @returns a newly-allocated image sample for use in tag lists, or NULL
     */
    function tag_image_data_to_image_sample(image_data: Uint8Array | string, image_type: TagImageType): Gst.Sample | null;

    /**
     * Adds an image from an ID3 APIC frame (or similar, such as used in FLAC)
     * to the given tag list. Also see `gst_tag_image_data_to_image_sample()` for
     * more information on image tags in GStreamer.
     * @param tag_list a tag list
     * @param image_data the (encoded) image
     * @param id3_picture_type picture type as per the ID3 (v2.4.0) specification for    the APIC frame (0 = unknown/other)
     * @returns `true` if the image was processed, otherwise `false`
     */
    function tag_list_add_id3_image(tag_list: Gst.TagList, image_data: Uint8Array | string, id3_picture_type: number): boolean;

    /**
     * Parses the IFD and IFD tags data contained in the buffer and puts it
     * on a taglist. The base_offset is used to subtract from the offset in
     * the tag entries and be able to get the offset relative to the buffer
     * start
     * @param buffer The exif buffer
     * @param byte_order byte order of the data
     * @param base_offset Offset from the tiff header to this buffer
     * @returns The parsed taglist
     */
    function tag_list_from_exif_buffer(buffer: Gst.Buffer, byte_order: number, base_offset: number): Gst.TagList;

    /**
     * Parses the exif tags starting with a tiff header structure.
     * @param buffer The exif buffer
     * @returns The taglist
     */
    function tag_list_from_exif_buffer_with_tiff_header(buffer: Gst.Buffer): Gst.TagList;

    /**
     * Creates a new tag list that contains the information parsed out of a
     * ID3 tag.
     * @param buffer buffer to convert
     * @returns A new {@link Gst.TagList} with all tags that could be extracted from the          given vorbiscomment buffer or NULL on error.
     */
    function tag_list_from_id3v2_tag(buffer: Gst.Buffer): Gst.TagList | null;

    /**
     * Creates a new tag list that contains the information parsed out of a
     * vorbiscomment packet.
     * @param data data to convert
     * @param id_data identification data at start of stream
     * @returns A new {@link Gst.TagList} with all tags that could be extracted from the          given vorbiscomment buffer or NULL on error.
     */
    function tag_list_from_vorbiscomment(data: Uint8Array | string, id_data: Uint8Array | string): [Gst.TagList | null, string];

    /**
     * Creates a new tag list that contains the information parsed out of a
     * vorbiscomment packet.
     * @param buffer buffer to convert
     * @param id_data identification data at start of stream
     * @returns A new {@link Gst.TagList} with all tags that could be extracted from the          given vorbiscomment buffer or NULL on error.
     */
    function tag_list_from_vorbiscomment_buffer(buffer: Gst.Buffer, id_data: Uint8Array | string): [Gst.TagList | null, string];

    /**
     * Parse a xmp packet into a taglist.
     * @param buffer buffer
     * @returns new taglist or `null`, free the list when done
     */
    function tag_list_from_xmp_buffer(buffer: Gst.Buffer): Gst.TagList | null;

    /**
     * Parses the data containing an ID3v1 tag and returns a {@link Gst.TagList} from the
     * parsed data.
     * @param data 128 bytes of data containing the ID3v1 tag
     * @returns A new tag list or NULL if the data was not an ID3v1 tag.
     */
    function tag_list_new_from_id3v1(data: Uint8Array | string): Gst.TagList | null;

    /**
     * Formats the tags in taglist on exif format. The resulting buffer contains
     * the tags IFD and is followed by the data pointed by the tag entries.
     * @param taglist The taglist
     * @param byte_order byte order used in writing (G_LITTLE_ENDIAN or G_BIG_ENDIAN)
     * @param base_offset Offset from the tiff header first byte
     * @returns A GstBuffer containing the tag entries followed by the tag data
     */
    function tag_list_to_exif_buffer(taglist: Gst.TagList, byte_order: number, base_offset: number): Gst.Buffer;

    /**
     * Formats the tags in taglist into exif structure, a tiff header
     * is put in the beginning of the buffer.
     * @param taglist The taglist
     * @returns A GstBuffer containing the data
     */
    function tag_list_to_exif_buffer_with_tiff_header(taglist: Gst.TagList): Gst.Buffer;

    /**
     * Creates a new vorbiscomment buffer from a tag list.
     * @param list tag list to convert
     * @param id_data identification data at start of stream
     * @param vendor_string string that describes the vendor string or NULL
     * @returns A new {@link Gst.Buffer} containing a vorbiscomment buffer with all tags          that could be converted from the given tag list.
     */
    function tag_list_to_vorbiscomment_buffer(list: Gst.TagList, id_data: Uint8Array | string, vendor_string: string | null): Gst.Buffer;

    /**
     * Formats a taglist as a xmp packet using only the selected
     * schemas. An empty list (`null`) means that all schemas should
     * be used
     * @param list tags
     * @param read_only does the container forbid inplace editing
     * @param schemas `null` terminated array of schemas to be used on serialization
     * @returns new buffer or `null`, unref the buffer when done
     */
    function tag_list_to_xmp_buffer(list: Gst.TagList, read_only: boolean, schemas: string[]): Gst.Buffer | null;

    /**
     * Convenience function to parse a GST_TAG_EXTENDED_COMMENT string and
     * separate it into its components.
     * 
     * If successful, `key`, `lang` and/or `value` will be set to newly allocated
     * strings that you need to free with `g_free()` when done. `key` and `lang`
     * may also be set to NULL by this function if there is no key or no language
     * code in the extended comment string.
     * @param ext_comment an extended comment string, see #GST_TAG_EXTENDED_COMMENT
     * @param fail_if_no_key whether to fail if strings are not in key=value form
     * @returns TRUE if the string could be parsed, otherwise FALSE
     */
    function tag_parse_extended_comment(ext_comment: string, fail_if_no_key: boolean): [boolean, string, string, string];

    /**
     * Registers additional musicbrainz-specific tags with the GStreamer tag
     * system. Plugins and applications that use these tags should call this
     * function before using them. Can be called multiple times.
     */
    function tag_register_musicbrainz_tags(): void;

    /**
     * Looks up the ID3v2 tag for a GStreamer tag.
     * @param gst_tag GStreamer tag to convert to vorbiscomment tag
     * @returns The corresponding ID3v2 tag or NULL if none exists.
     */
    function tag_to_id3_tag(gst_tag: string): string | null;

    /**
     * Creates a new tag list that contains the information parsed out of a
     * vorbiscomment packet.
     * @param list a {@link Gst.TagList}
     * @param tag a GStreamer tag identifier, such as #GST_TAG_ARTIST
     * @returns A {@link GLib.List} of newly-allocated     key=value strings. Free with g_list_foreach (list, (GFunc) g_free, NULL)     plus g_list_free (list)
     */
    function tag_to_vorbis_comments(list: Gst.TagList, tag: string): string[];

    /**
     * Looks up the vorbiscomment tag for a GStreamer tag.
     * @param gst_tag GStreamer tag to convert to vorbiscomment tag
     * @returns The corresponding vorbiscomment tag or NULL if none exists.
     */
    function tag_to_vorbis_tag(gst_tag: string): string | null;

    /**
     * Gets the list of supported schemas in the xmp lib
     * @returns a `null` terminated array of strings with the     schema names
     */
    function tag_xmp_list_schemas(): string[];

    /**
     * Convenience function using `gst_tag_from_vorbis_tag()`, parsing
     * a vorbis comment string into the right type and adding it to the
     * given taglist `list`.
     * 
     * Unknown vorbiscomment tags will be added to the tag list in form
     * of a #GST_TAG_EXTENDED_COMMENT.
     * @param list a {@link Gst.TagList}
     * @param tag a vorbiscomment tag string (key in key=value), must be valid UTF-8
     * @param value a vorbiscomment value string (value in key=value), must be valid UTF-8
     */
    function vorbis_tag_add(list: Gst.TagList, tag: string, value: string): void;

    /**
     * @gir-type Flags
     */
    export namespace TagLicenseFlags {
        export const $gtype: GObject.GType<TagLicenseFlags>;
    }

    /**
     * See http://creativecommons.org/ns for more information.
     * @gir-type Flags
     */
    enum TagLicenseFlags {
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


    namespace TagDemux {
        // Signal signatures
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gst.Element.ConstructorProps {}
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
     * @gir-type Class
     */
    abstract class TagDemux extends Gst.Element {
        static $gtype: GObject.GType<TagDemux>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TagDemux.SignalSignatures;

        // Fields
        element: Gst.Element;

        // Constructors
        constructor(properties?: Partial<TagDemux.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof TagDemux.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TagDemux.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TagDemux.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TagDemux.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TagDemux.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TagDemux.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param buffer 
         * @param start_tag 
         * @param tag_size 
         * @virtual
         */
        vfunc_identify_tag(buffer: Gst.Buffer, start_tag: boolean, tag_size: number): boolean;

        /**
         * @param start_tags 
         * @param end_tags 
         * @virtual
         */
        vfunc_merge_tags(start_tags: Gst.TagList, end_tags: Gst.TagList): Gst.TagList;

        /**
         * @param buffer 
         * @param start_tag 
         * @param tag_size 
         * @param tags 
         * @virtual
         */
        vfunc_parse_tag(buffer: Gst.Buffer, start_tag: boolean, tag_size: number, tags: Gst.TagList): TagDemuxResult;
    }


    namespace TagMux {
        // Signal signatures
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gst.Element.ConstructorProps, Gst.TagSetter.ConstructorProps {}
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
     * @gir-type Class
     */
    abstract class TagMux extends Gst.Element implements Gst.TagSetter {
        static $gtype: GObject.GType<TagMux>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TagMux.SignalSignatures;

        // Fields
        element: Gst.Element;

        // Constructors
        constructor(properties?: Partial<TagMux.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof TagMux.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TagMux.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TagMux.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TagMux.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TagMux.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TagMux.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param tag_list 
         * @virtual
         */
        vfunc_render_end_tag(tag_list: Gst.TagList): Gst.Buffer;

        /**
         * @param tag_list 
         * @virtual
         */
        vfunc_render_start_tag(tag_list: Gst.TagList): Gst.Buffer;

        /**
         * Adds the given tag / GValue pair on the setter using the given merge mode.
         * @param mode the mode to use
         * @param tag tag to set
         * @param value GValue to set for the tag
         */
        add_tag_value(mode: Gst.TagMergeMode, tag: string, value: GObject.Value | any): void;

        /**
         * Returns the current list of tags the setter uses.  The list should not be
         * modified or freed.
         * 
         * This function is not thread-safe.
         * @returns a current snapshot of the          taglist used in the setter or `null` if none is used.
         */
        get_tag_list(): Gst.TagList | null;

        /**
         * Queries the mode by which tags inside the setter are overwritten by tags
         * from events
         * @returns the merge mode used inside the element.
         */
        get_tag_merge_mode(): Gst.TagMergeMode;

        /**
         * Merges the given list into the setter's list using the given mode.
         * @param list a tag list to merge from
         * @param mode the mode to merge with
         */
        merge_tags(list: Gst.TagList, mode: Gst.TagMergeMode): void;

        /**
         * Reset the internal taglist. Elements should call this from within the
         * state-change handler.
         */
        reset_tags(): void;

        /**
         * Sets the given merge mode that is used for adding tags from events to tags
         * specified by this interface. The default is #GST_TAG_MERGE_KEEP, which keeps
         * the tags set with this interface and discards tags from events.
         * @param mode The mode with which tags are added
         */
        set_tag_merge_mode(mode: Gst.TagMergeMode): void;

        /**
         * Calls `func` from another thread and passes `user_data` to it. This is to be
         * used for cases when a state change has to be performed from a streaming
         * thread, directly via `gst_element_set_state()` or indirectly e.g. via SEEK
         * events.
         * 
         * Calling those functions directly from the streaming thread will cause
         * deadlocks in many situations, as they might involve waiting for the
         * streaming thread to shut down from this very streaming thread.
         * 
         * MT safe.
         * @param func Function to call asynchronously from another thread
         */
        call_async(func: Gst.ElementCallAsyncFunc): void;

        /**
         * @param args 
         */
        // Conflicted with Gst.Object.call_async
        call_async(...args: never[]): any;
    }


    /**
     * @gir-type Alias
     */
    type TagDemuxClass = typeof TagDemux;

    /**
     * @gir-type Struct
     */
    abstract class TagDemuxPrivate {
        static $gtype: GObject.GType<TagDemuxPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type TagMuxClass = typeof TagMux;

    /**
     * @gir-type Struct
     */
    abstract class TagMuxPrivate {
        static $gtype: GObject.GType<TagMuxPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type TagXmpWriterInterface = typeof TagXmpWriter;

    namespace TagXmpWriter {

        // Constructor properties interface
        interface ConstructorProps extends Gst.Element.ConstructorProps {}
    }

    export interface TagXmpWriterNamespace {
        $gtype: GObject.GType<TagXmpWriter>;
        prototype: TagXmpWriter;
    }
    /**
     * This interface is implemented by elements that are able to do XMP serialization. Examples for
     * such elements are #jifmux and #qtmux.
     * 
     * Applications can use this interface to configure which XMP schemas should be used when serializing
     * tags into XMP. Schemas are represented by their names, a full list of the supported schemas can be
     * obtained from `gst_tag_xmp_list_schemas()`. By default, all schemas are used.
     * @gir-type Interface
     */
    interface TagXmpWriter extends Gst.Element {

        // Methods
        /**
         * Adds all available XMP schemas to the configuration. Meaning that
         * all will be used.
         */
        add_all_schemas(): void;

        /**
         * Adds `schema` to the list schemas
         * @param schema the schema to be added
         */
        add_schema(schema: string): void;

        /**
         * Checks if `schema` is going to be used
         * @param schema the schema to test
         * @returns `true` if it is going to be used
         */
        has_schema(schema: string): boolean;

        /**
         * Removes all schemas from the list of schemas to use. Meaning that no
         * XMP will be generated.
         */
        remove_all_schemas(): void;

        /**
         * Removes a schema from the list of schemas to use. Nothing is done if
         * the schema wasn't in the list
         * @param schema the schema to remove
         */
        remove_schema(schema: string): void;

        /**
         * @param taglist 
         * @param read_only 
         */
        tag_list_to_xmp_buffer(taglist: Gst.TagList, read_only: boolean): Gst.Buffer;
    }


    export const TagXmpWriter: TagXmpWriterNamespace & {
        new (): TagXmpWriter; // This allows `obj instanceof TagXmpWriter`
    };

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
