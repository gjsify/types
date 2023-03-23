
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * GExiv2-0.10
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export namespace GExiv2 {

/**
 * Options to control the byte order of binary EXIF data exports
 */
enum ByteOrder {
    /**
     * Use little-endian byte order
     */
    LITTLE,
    /**
     * Use big-endian byte order
     */
    BIG,
}
/**
 * GExiv2 log levels
 */
enum LogLevel {
    /**
     * Log level for debugging
     */
    DEBUG,
    /**
     * Log level for informational messages
     */
    INFO,
    /**
     * Log level for warning messages
     */
    WARN,
    /**
     * Log level for error messages
     */
    ERROR,
    /**
     * Suppress all log messages
     */
    MUTE,
}
/**
 * The orientation of an image is defined as the location of it's x,y origin.  More than rotation,
 * orientation allows for every variation of rotation, flips, and mirroring to be described in
 * 3 bits of data.
 * 
 * A handy primer to orientation can be found at
 * <ulink url="http://jpegclub.org/exif_orientation.html"></ulink>
 */
enum Orientation {
    /**
     * The orientation of the image is unknown
     */
    UNSPECIFIED,
    /**
     * The orientation of the image is without any rotation.
     */
    NORMAL,
    /**
     * The image is flipped on its horizontal axis
     */
    HFLIP,
    /**
     * The image is rotated by 180 degrees
     */
    ROT_180,
    /**
     * The Image is flipped on its vertical axis
     */
    VFLIP,
    /**
     * The image is rotated by 90 degrees clockwise and flipped on its horizontal axis
     */
    ROT_90_HFLIP,
    /**
     * The image is rotated by 90 degrees clockwise
     */
    ROT_90,
    /**
     * The image is rotated by 90 degrees clockwise and flipped on its vertical axis
     */
    ROT_90_VFLIP,
    /**
     * The image is rotated 270 degrees clockwise
     */
    ROT_270,
}
/**
 * Used in gexiv2_metadata_set_xmp_tag_struct() to determine the array type
 */
enum StructureType {
    /**
     * Structure is not an array
     */
    NONE,
    /**
     * A list of alternative values
     */
    ALT,
    /**
     * An unordered list of values
     */
    BAG,
    /**
     * An ordered list of values
     */
    SEQ,
    /**
     * Not supported. For completeness only
     */
    LANG,
}
/**
 * Options to control the format of the serialized XMP packet
 * Taken from: exiv2/src/xmp.hpp
 * @bitfield 
 */
enum XmpFormatFlags {
    /**
     * Omit the XML packet wrapper.
     */
    OMIT_PACKET_WRAPPER,
    /**
     * Default is a writeable packet.
     */
    READ_ONLY_PACKET,
    /**
     * Use a compact form of RDF.
     */
    USE_COMPACT_FORMAT,
    /**
     * Include a padding allowance for a thumbnail image.
     */
    INCLUDE_THUMBNAIL_PAD,
    /**
     * The padding parameter is the overall packet length.
     */
    EXACT_PACKET_LENGTH,
    /**
     * Show aliases as XML comments.
     */
    WRITE_ALIAS_COMMENTS,
    /**
     * Omit all formatting whitespace.
     */
    OMIT_ALL_FORMATTING,
}
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
function getVersion(): number
/**
 * gexiv2 requires initialization before its methods are used.  In particular, this call must be
 * made in a thread-safe fashion.  Best practice is to call from the application's main thread and
 * not to use any Gexiv2 code until it has returned.
 * @returns %TRUE if initialized.  If %FALSE, GExiv2 should not be used (unable to initialize properly).
 */
function initialize(): boolean
function logGetLevel(): LogLevel
/**
 * Log messages below this level will not be logged.
 * @param level The #GExiv2LogLevel gexiv2 should respect.
 */
function logSetLevel(level: LogLevel): void
/**
 * When called, gexiv2 will install it's own #GExiv2LogHandler which redirects all Exiv2 and gexiv2
 * log messages to GLib's logging calls (g_debug(), g_message(), g_warning(), and g_critical() for the
 * respective #GExiv2LogLevel value).  #GEXIV2_LOG_LEVEL_MUTE logs are dropped.
 * 
 * One advantage to using this is that GLib's logging control and handlers can be used rather than
 * GExiv2's ad hoc scheme.  It also means an application can use GLib logging and have all its
 * messages routed through the same calls.
 */
function logUseGlibLogging(): void
/**
 * The log handler can be set by gexiv2_log_set_handler().  When set, the log handler will receive
 * all log messages emitted by Exiv2 and gexiv2.  It's up to the handler to decide where (and if)
 * the images are displayed or stored.
 * @callback 
 * @param level The #GExiv2LogLevel for the particular message
 * @param msg The log message
 */
interface LogHandler {
    (level: LogLevel, msg: string | null): void
}
module Metadata {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Metadata {

    // Own properties of GExiv2-0.10.GExiv2.Metadata

    __gtype__: number

    // Own fields of GExiv2-0.10.GExiv2.Metadata

    parentInstance: GObject.Object

    // Owm methods of GExiv2-0.10.GExiv2.Metadata

    /**
     * Removes all tags for all domains (EXIF, IPTC, and XMP).
     */
    clear(): void
    /**
     * This is a composite clear method that will clear a number of fields.  See
     * #gexiv2_metadata_get_comment for more information.
     */
    clearComment(): void
    /**
     * Clears all EXIF metadata from the loaded image.
     */
    clearExif(): void
    /**
     * Clears all IPTC metadata from the loaded image.
     */
    clearIptc(): void
    /**
     * Removes the Exiv2 tag from the metadata object.
     * 
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag
     * @returns TRUE if the tag was present.
     */
    clearTag(tag: string | null): boolean
    /**
     * Clears all XMP metadata from the loaded image.
     */
    clearXmp(): void
    /**
     * Removes all GPS metadata from the loaded image
     */
    deleteGpsInfo(): void
    /**
     * Removes the EXIF thumbnail from the loaded image.
     */
    eraseExifThumbnail(): void
    /**
     * Destroys the #GExiv2Metadata object and frees all associated memory.
     */
    free(): void
    /**
     * Load only an EXIF buffer, typically stored in a JPEG's APP1 segment.
     * @param data A buffer containing the data to be read
     * @returns Boolean success indicator.
     */
    fromApp1Segment(data: Uint8Array): boolean
    /**
     * This function does not work and will be removed in a future release.
     * @param stream 
     */
    fromStream(stream: Gio.InputStream): boolean
    /**
     * Encode the XMP packet as a %NULL-terminated string.
     * @param xmpFormatFlags One of #GExiv2XmpFormatFlags
     * @param padding The padding (FIXME: Add documentation)
     * @returns Encode the XMP packet and return as a %NULL-terminated string.
     */
    generateXmpPacket(xmpFormatFlags: XmpFormatFlags, padding: number): string | null
    /**
     * A composite accessor that uses the first available metadata field from a list of well-known
     * locations to find the photo's comment (or description).
     * 
     * MWG guidelines refer to these as <emphasis>Description</emphasis>: a textual description of a resource's content.
     * 
     * These fields are:
     * 
     * - Exif.Image.ImageDescription  (MWG Guidelines)
     * - Exif.Photo.UserComment
     * - Exif.Image.XPComment
     * - Iptc.Application2.Caption    (MWG Guidelines)
     * - Xmp.dc.description           (MWG Guidelines)
     * - Xmp.acdsee.notes             (Commonly requested, read only)
     * 
     * <note>Note that in the EXIF specification Exif.Image.ImageDescription is
     * described  as "the title of the image".  Also, it does not support
     * two-byte character codes for encoding.  However, it's still used here for legacy reasons.
     * </note>
     * 
     * For fine-grained control, it's recommended to use Exiv2 tags directly rather than this method,
     * which is more useful for quick or casual use.
     * @returns The photo's comment field.
     */
    getComment(): string | null
    getExifData(byteOrder: ByteOrder): any | null
    /**
     * Fetch EXIF `tag` represented by a fraction. `nom` will contain the numerator,
     * `den` the denominator of the fraction on successful return.
     * @param tag The tag you want the rational value for
     * @returns Boolean success value
     */
    getExifTagRational(tag: string | null): [ /* returnType */ boolean, /* nom */ number, /* den */ number ]
    /**
     * Query `self` for a list of available EXIF tags
     * @returns A unique list of the available EXIF tags in the loaded image
     */
    getExifTags(): string[]
    /**
     * Get the thumbnail stored in the EXIF data of `self`
     * @returns Boolean success value
     */
    getExifThumbnail(): [ /* returnType */ boolean, /* buffer */ Uint8Array ]
    /**
     * Returns the exposure time in seconds (shutter speed, <emphasis>not</emphasis> date-time of exposure) as a
     * rational.  See <ulink url="https://en.wikipedia.org/wiki/Shutter_speed"></ulink> for more information.
     * @returns Boolean success value
     */
    getExposureTime(): [ /* returnType */ boolean, /* nom */ number, /* den */ number ]
    /**
     * See <ulink url="https://en.wikipedia.org/wiki/F-number"></ulink> for more information.
     * If Exif.Photo.FNumber does not exist, it will fall back to calculating the FNumber from
     * Exif.Photo.ApertureValue (if available);
     * @returns The exposure Fnumber as a gdouble, or -1.0 if tag is not present or invalid.
     */
    getFnumber(): number
    /**
     * See <ulink url="https://en.wikipedia.org/wiki/Flange_focal_distance"></ulink> for more information.
     * @returns The focal length as a gdouble, or -1.0 if tag is not present or invalid.
     */
    getFocalLength(): number
    /**
     * Convenience function to query the altitude stored in the GPS tags of the
     * image
     * @returns Boolean success value
     */
    getGpsAltitude(): [ /* returnType */ boolean, /* altitude */ number ]
    /**
     * Convenience function to query all available GPS information at once.
     * @returns Boolean success value.
     */
    getGpsInfo(): [ /* returnType */ boolean, /* longitude */ number, /* latitude */ number, /* altitude */ number ]
    /**
     * Query the latitude stored in the GPS tags of `self`
     * @returns Boolean success value
     */
    getGpsLatitude(): [ /* returnType */ boolean, /* latitude */ number ]
    /**
     * Query the longitude stored in the GPS tags of `self`
     * @returns Boolean success value
     */
    getGpsLongitude(): [ /* returnType */ boolean, /* longitude */ number ]
    /**
     * Query `self` for a list of available IPTC tags
     * @returns A unique list of the available IPTC tags
     */
    getIptcTags(): string[]
    /**
     * See <ulink url="https://en.wikipedia.org/wiki/Iso_speed"></ulink> for more information.
     * @returns The ISO speed rating as a gint, or 0 if tag is not present or invalid.
     */
    getIsoSpeed(): number
    /**
     * Composite accessor to query the pixel with stored in the metadata. This
     * might differ from the height of image that is available through
     * gexiv2_metadata_get_pixel_height()
     * @returns Height of images in pixels as stored in the metadata
     */
    getMetadataPixelHeight(): number
    /**
     * Composite accessor to query the pixel with stored in the metadata. This
     * might differ from the width of image that is available through
     * gexiv2_metadata_get_pixel_width()
     * @returns Width of images in pixels as stored in the metadata
     */
    getMetadataPixelWidth(): number
    /**
     * Query mime type of currently loaded image.
     * @returns The MIME type of the loaded image, %NULL if not loaded or unknown.
     */
    getMimeType(): string | null
    /**
     * The EXIF Orientation field
     * @returns A #GExiv2Orientation value representing the EXIF orientation value.
     */
    getOrientation(): Orientation
    /**
     * Get the <emphasis>actual</emphasis> unoriented display height in pixels of the loaded image.  This may
     * be different than the height reported by various metadata tags, i.e. "Exif.Photo.PixelYDimension".
     * @returns Pixel height of current image
     */
    getPixelHeight(): number
    /**
     * Get the <emphasis>actual</emphasis> unoriented display width in pixels of the loaded
     * image. May be different than the width reported by various metadata tags,
     * i.e. "Exif.Photo.PixelXDimension".
     * @returns Pixel width of current image
     */
    getPixelWidth(): number
    getPreviewImage(props: PreviewProperties): PreviewImage
    /**
     * An image may have stored one or more previews, often of different qualities, sometimes of
     * different image formats than the containing image.  This call returns the properties of all
     * previews Exiv2 finds within the loaded image.  Use #gexiv2_metadata_get_preview_image to
     * load a particular preview into memory.
     * @returns An array of #GExiv2PreviewProperties instances, one for each preview present in the loaded image.
     */
    getPreviewProperties(): PreviewProperties[] | null
    /**
     * Query `self` whether it supports writing EXIF metadata.
     * @returns %TRUE if the loaded image type supports writing EXIF metadata.
     */
    getSupportsExif(): boolean
    /**
     * Query `self` whether it supports writing IPTC metadata.
     * @returns %TRUE if the loaded image type supports writing IPTC metadata.
     */
    getSupportsIptc(): boolean
    /**
     * Query `self` whether it supports writing XMP metadata.
     * @returns %TRUE if the loaded image type supports writing XMP metadata.
     */
    getSupportsXmp(): boolean
    /**
     * An interpreted string is one fit for user display.  It may display units or use formatting
     * appropriate to the type of data the tag holds.
     * 
     * Tags that support multiple values are returned as a single string, with elements separated by ", ".
     * 
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag name
     * @returns The tag's interpreted value as a string
     */
    getTagInterpretedString(tag: string | null): string | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag name
     * @returns The tag's value as a glong
     */
    getTagLong(tag: string | null): number
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * 
     * In case of error, a GLib warning will be logged. Use instead
     * gexiv2_metadata_try_get_tag_multiple() if you want to avoid this and
     * control if and how the error is outputted.
     * @param tag Exiv2 tag name
     * @returns The multiple string values of the tag.  Returns %NULL if parameters are %NULL or @tag does not begin with recognised type of metadata ("Exif.", "Xmp." or "Iptc.").  For a well formed @tag, returns array[0] = %NULL if @tag is undefined or is not set in the current metadata. (Note: <ulink url="https://gitlab.gnome.org/GNOME/gexiv2/-/issues/61">xmpText/langAlt bug</ulink>  is fixed in gexiv2_metadata_try_get_tag_multiple())
     */
    getTagMultiple(tag: string | null): string[] | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * 
     * Tags that support multiple values may bereturned as a single byte array, with records separated
     * by 4x INFORMATION SEPARATOR FOUR (ASCII 0x1c)
     * @param tag Exiv2 tag name
     * @returns The tag's raw value as a byte array
     */
    getTagRaw(tag: string | null): any | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * 
     * Tags that support multiple values are returned as a single string, with elements separated by ", ".
     * 
     * In case of error, a GLib warning will be logged. Use instead
     * gexiv2_metadata_try_get_tag_string() if you want to avoid this and
     * control if and how the error is outputted.
     * @param tag Exiv2 tag name
     * @returns The tag's value as a string
     */
    getTagString(tag: string | null): string | null
    getXmpPacket(): string | null
    getXmpTags(): string[]
    hasExif(): boolean
    hasIptc(): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag
     * @returns TRUE if the tag is present.
     */
    hasTag(tag: string | null): boolean
    hasXmp(): boolean
    /**
     * The buffer must be an image format supported by Exiv2.
     * @param data A buffer containing the data to be read
     * @returns Boolean success indicator
     */
    openBuf(data: Uint8Array): boolean
    /**
     * The file must be an image format supported by Exiv2.
     * @param path Path to the file you want to open
     * @returns Boolean success indicator
     */
    openPath(path: string | null): boolean
    /**
     * Saves the metadata to the specified using an XMP sidecar file.
     * @param path Path to the file you want to save to.
     * @returns Boolean success indicator.
     */
    saveExternal(path: string | null): boolean
    /**
     * Saves the metadata to the specified file by reading the file into memory,copying this object's
     * metadata into the image, then writing the image back out.
     * @param path Path to the file you want to save to.
     * @returns Boolean success indicator.
     */
    saveFile(path: string | null): boolean
    /**
     * This is a composite setter that will set a number of fields to the supplied value.  See
     * #gexiv2_metadata_get_comment for more information.
     * @param comment Comment string to set. Must not be %NULL
     */
    setComment(comment: string | null): void
    /**
     * Set EXIF `tag` represented by a fraction, with `nom` being the numerator,
     * `den` the denominator of the fraction.
     * @param tag The Exiv2 tag
     * @param nom Rational numerator
     * @param den Rational denominator
     * @returns Boolean success value
     */
    setExifTagRational(tag: string | null, nom: number, den: number): boolean
    setExifThumbnailFromBuffer(buffer: Uint8Array): void
    /**
     * Sets or replaces the EXIF thumbnail with the image in the file
     * @param path Path of image file
     * @returns Boolean success value
     */
    setExifThumbnailFromFile(path: string | null): boolean
    /**
     * Convenience function to create a new set of simple GPS data. Warning: Will remove any other
     * GPS information that is currently set. See gexiv2_metadata_update_gps_info() for
     * just modifying the GPS data.
     * @param longitude Longitude value to set or replace current value
     * @param latitude Latitude value to set or replace current value
     * @param altitude Altitude value to set or replace current value
     * @returns Boolean success value.
     */
    setGpsInfo(longitude: number, latitude: number, altitude: number): boolean
    /**
     * Update the image's metadata with `height`
     * @param height The width of the image as it should be put into the metadata.
     */
    setMetadataPixelHeight(height: number): void
    /**
     * Composite setter to update the image's metadata with `width`
     * @param width The width of the image as it should be put into the metadata
     */
    setMetadataPixelWidth(width: number): void
    /**
     * The orientation must be valid and cannot be #GEXIV2_ORIENTATION_UNSPECIFIED.
     * @param orientation The new #GExiv2Orientation for the image.
     */
    setOrientation(orientation: Orientation): void
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag name
     * @param value The value to set or replace the existing value
     * @returns TRUE on success
     */
    setTagLong(tag: string | null, value: number): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * 
     * All previous `tag` values are erased. For multiple value tags, each of the non %NULL
     * entries in `values` is stored. For single value tags, only the last non %NULL value
     * is assigned.
     * 
     * In case of error, a GLib warning will be logged. Use instead
     * gexiv2_metadata_try_set_tag_multiple() if you want to avoid this and
     * control if and how the error is outputted.
     * @param tag Exiv2 tag name
     * @param values An array of values to set or replace the existing value(s)
     * @returns Boolean success value
     */
    setTagMultiple(tag: string | null, values: string[]): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * 
     * If a tag supports multiple values, then `value` is added to any existing values. For single
     * value tags, `value` replaces the value.
     * 
     * In case of error, a GLib warning will be logged. Use instead
     * gexiv2_metadata_try_set_tag_string() if you want to avoid this and
     * control if and how the error is outputted.
     * @param tag Exiv2 tag name
     * @param value The value to set or replace the existing value
     * @returns TRUE on success
     */
    setTagString(tag: string | null, value: string | null): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag name
     * @param type The GExiv2StructureType specifying the type of structure
     * @returns TRUE on success
     */
    setXmpTagStruct(tag: string | null, type: StructureType): boolean
    /**
     * Removes the Exiv2 tag from the metadata object.
     * 
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag
     * @returns TRUE if the tag was present.
     */
    tryClearTag(tag: string | null): boolean
    /**
     * Removes all GPS metadata from the loaded image
     */
    tryDeleteGpsInfo(): void
    /**
     * Removes the EXIF thumbnail from the loaded image.
     */
    tryEraseExifThumbnail(): void
    /**
     * Encode the XMP packet as a %NULL-terminated string.
     * @param xmpFormatFlags One of #GExiv2XmpFormatFlags
     * @param padding The padding (FIXME: Add documentation)
     * @returns Encode the XMP packet and return as a %NULL-terminated string.
     */
    tryGenerateXmpPacket(xmpFormatFlags: XmpFormatFlags, padding: number): string | null
    /**
     * A composite accessor that uses the first available metadata field from a list of well-known
     * locations to find the photo's comment (or description).
     * 
     * MWG guidelines refer to these as <emphasis>Description</emphasis>: a textual description of a resource's content.
     * 
     * These fields are:
     * 
     * - Exif.Image.ImageDescription  (MWG Guidelines)
     * - Exif.Photo.UserComment
     * - Exif.Image.XPComment
     * - Iptc.Application2.Caption    (MWG Guidelines)
     * - Xmp.dc.description           (MWG Guidelines)
     * - Xmp.acdsee.notes             (Commonly requested, read only)
     * 
     * <note>Note that in the EXIF specification Exif.Image.ImageDescription is
     * described  as "the title of the image".  Also, it does not support
     * two-byte character codes for encoding.  However, it's still used here for legacy reasons.
     * </note>
     * 
     * For fine-grained control, it's recommended to use Exiv2 tags directly rather than this method,
     * which is more useful for quick or casual use.
     * @returns The photo's comment field.
     */
    tryGetComment(): string | null
    /**
     * Fetch EXIF `tag` represented by a fraction. `nom` will contain the numerator,
     * `den` the denominator of the fraction on successful return.
     * @param tag The tag you want the rational value for
     * @returns Boolean success value
     */
    tryGetExifTagRational(tag: string | null): [ /* returnType */ boolean, /* nom */ number, /* den */ number ]
    /**
     * Returns the exposure time in seconds (shutter speed, <emphasis>not</emphasis> date-time of exposure) as a
     * rational.  See <ulink url="https://en.wikipedia.org/wiki/Shutter_speed"></ulink> for more information.
     * @returns Boolean success value
     */
    tryGetExposureTime(): [ /* returnType */ boolean, /* nom */ number, /* den */ number ]
    /**
     * See <ulink url="https://en.wikipedia.org/wiki/F-number"></ulink> for more information.
     * If Exif.Photo.FNumber does not exist, it will fall back to calculating the FNumber from
     * Exif.Photo.ApertureValue (if available);
     * @returns The exposure Fnumber as a gdouble, or -1.0 if tag is not present or invalid.
     */
    tryGetFnumber(): number
    /**
     * See <ulink url="https://en.wikipedia.org/wiki/Flange_focal_distance"></ulink> for more information.
     * @returns The focal length as a gdouble, or -1.0 if tag is not present or invalid.
     */
    tryGetFocalLength(): number
    /**
     * Convenience function to query the altitude stored in the GPS tags of the
     * image
     * @returns Boolean success value
     */
    tryGetGpsAltitude(): [ /* returnType */ boolean, /* altitude */ number ]
    /**
     * Convenience function to query all available GPS information at once.
     * @returns Boolean success value.
     */
    tryGetGpsInfo(): [ /* returnType */ boolean, /* longitude */ number, /* latitude */ number, /* altitude */ number ]
    /**
     * Query the latitude stored in the GPS tags of `self`
     * @returns Boolean success value
     */
    tryGetGpsLatitude(): [ /* returnType */ boolean, /* latitude */ number ]
    /**
     * Query the longitude stored in the GPS tags of `self`
     * @returns Boolean success value
     */
    tryGetGpsLongitude(): [ /* returnType */ boolean, /* longitude */ number ]
    /**
     * See <ulink url="https://en.wikipedia.org/wiki/Iso_speed"></ulink> for more information.
     * @returns The ISO speed rating as a gint, or 0 if tag is not present or invalid.
     */
    tryGetIsoSpeed(): number
    /**
     * Composite accessor to query the pixel with stored in the metadata. This
     * might differ from the height of image that is available through
     * gexiv2_metadata_get_pixel_height()
     * @returns Height of images in pixels as stored in the metadata
     */
    tryGetMetadataPixelHeight(): number
    /**
     * Composite accessor to query the pixel with stored in the metadata. This
     * might differ from the width of image that is available through
     * gexiv2_metadata_get_pixel_width()
     * @returns Width of images in pixels as stored in the metadata
     */
    tryGetMetadataPixelWidth(): number
    /**
     * The EXIF Orientation field
     * @returns A #GExiv2Orientation value representing the EXIF orientation value.
     */
    tryGetOrientation(): Orientation
    tryGetPreviewImage(props: PreviewProperties): PreviewImage
    /**
     * An interpreted string is one fit for user display.  It may display units or use formatting
     * appropriate to the type of data the tag holds.
     * 
     * Tags that support multiple values are returned as a single string, with elements separated by ", ".
     * 
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag name
     * @returns The tag's interpreted value as a string
     */
    tryGetTagInterpretedString(tag: string | null): string | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag name
     * @returns The tag's value as a glong
     */
    tryGetTagLong(tag: string | null): number
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag name
     * @returns The multiple string values of @tag.  Returns %NULL if parameters are %NULL or @tag does not begin with recognised type of metadata ("Exif.", "Xmp." or "Iptc.").  For a well formed @tag, returns array[0] = %NULL if @tag is undefined or is not set in the current metadata.
     */
    tryGetTagMultiple(tag: string | null): string[] | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * 
     * Tags that support multiple values may be returned as a single byte array, with records separated
     * by 4x INFORMATION SEPARATOR FOUR (ASCII 0x1c)
     * @param tag Exiv2 tag name
     * @returns The tag's raw value as a byte array
     */
    tryGetTagRaw(tag: string | null): any | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * 
     * Tags that support multiple values are returned as a single string, with elements separated by ", ".
     * @param tag Exiv2 tag name
     * @returns The tag's value as a string
     */
    tryGetTagString(tag: string | null): string | null
    tryGetXmpPacket(): string | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag
     * @returns TRUE if the tag is present.
     */
    tryHasTag(tag: string | null): boolean
    /**
     * This is a composite setter that will set a number of fields to the supplied value.  See
     * #gexiv2_metadata_get_comment for more information.
     * @param comment Comment string to set. Must not be %NULL
     */
    trySetComment(comment: string | null): void
    /**
     * Set EXIF `tag` represented by a fraction, with `nom` being the numerator,
     * `den` the denominator of the fraction.
     * @param tag The Exiv2 tag
     * @param nom Rational numerator
     * @param den Rational denominator
     * @returns Boolean success value
     */
    trySetExifTagRational(tag: string | null, nom: number, den: number): boolean
    trySetExifThumbnailFromBuffer(buffer: Uint8Array): void
    /**
     * Convenience function to create a new set of simple GPS data. Warning: Will remove any other
     * GPS information that is currently set. See gexiv2_metadata_update_gps_info() for
     * just modifying the GPS data.
     * @param longitude Longitude value to set or replace current value
     * @param latitude Latitude value to set or replace current value
     * @param altitude Altitude value to set or replace current value
     * @returns Boolean success value.
     */
    trySetGpsInfo(longitude: number, latitude: number, altitude: number): boolean
    /**
     * Update the image's metadata with `height`
     * @param height The width of the image as it should be put into the metadata.
     */
    trySetMetadataPixelHeight(height: number): void
    /**
     * Composite setter to update the image's metadata with `width`
     * @param width The width of the image as it should be put into the metadata
     */
    trySetMetadataPixelWidth(width: number): void
    /**
     * The orientation must be valid and cannot be #GEXIV2_ORIENTATION_UNSPECIFIED.
     * @param orientation The new #GExiv2Orientation for the image.
     */
    trySetOrientation(orientation: Orientation): void
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag name
     * @param value The value to set or replace the existing value
     * @returns TRUE on success
     */
    trySetTagLong(tag: string | null, value: number): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * 
     * All previous `tag` values are erased. For multiple value tags, each of the non %NULL
     * entries in `values` is stored. For single value tags, only the last non %NULL value
     * is assigned.
     * @param tag Exiv2 tag name
     * @param values An array of values to set or replace the existing value(s)
     * @returns Boolean success value
     */
    trySetTagMultiple(tag: string | null, values: string[]): boolean
    /**
     * If a tag supports multiple values, then `value` is added to any existing values. For single
     * tags, `value` replaces the value.
     * 
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag name
     * @param value The value to set or replace the existing value
     * @returns TRUE on success
     */
    trySetTagString(tag: string | null, value: string | null): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag Exiv2 tag name
     * @param type The GExiv2StructureType specifying the type of structure
     * @returns TRUE on success
     */
    trySetXmpTagStruct(tag: string | null, type: StructureType): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="https://www.exiv2.org/metadata.html"></ulink>
     * 
     * Multiple value tags are Xmp tags of type "XmpAlt", "XmpBag", "XmpSeq" or "LangAlt", or Iptc
     * tags marked as Repeatable (which can be of any Iptc type). There are no multiple value Exif
     * tags.
     * @param tag An Exiv2 tag
     * @returns Whether @tag is capable of storing multiple values or not. If @tag is undefined (i.e. not built-in and not added to @self), then @error is set and %FALSE is returned.
     */
    tryTagSupportsMultipleValues(tag: string | null): boolean
    /**
     * Convenience function to update longitude, latitude and altitude at once.
     * @param longitude Longitude value to set or replace current value
     * @param latitude Latitude value to set or replace current value
     * @param altitude Altitude value to set or replace current value
     * @returns Boolean success value.
     */
    tryUpdateGpsInfo(longitude: number, latitude: number, altitude: number): boolean
    /**
     * Convenience function to update longitude, latitude and altitude at once.
     * @param longitude Longitude value to set or replace current value
     * @param latitude Latitude value to set or replace current value
     * @param altitude Altitude value to set or replace current value
     * @returns Boolean success value.
     */
    updateGpsInfo(longitude: number, latitude: number, altitude: number): boolean

    // Class property signals of GExiv2-0.10.GExiv2.Metadata

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
 * An object holding all the Exiv2 metadata.  Previews, if present, are also available.
 * 
 * As gexiv2 is only a wrapper around Exiv2, it's better to read its documentation to understand
 * the full scope of what it offers: <ulink url="http://www.exiv2.org/"></ulink>
 * 
 * In particular, rather than providing a getter/setter method pair for every metadata value
 * available for images (of which there are thousands), Exiv2 uses a dotted addressing scheme.
 * For example, to access a photo's EXIF Orientation field, the caller passes to Exiv2
 * "Exif.Photo.Orientation".  These <emphasis>tags</emphasis> (in Exiv2 parlance) are key to using Exiv2 (and
 * therefore gexiv2) to its fullest.
 * 
 * A full reference for all supported Exiv2 tags can be found at
 * <ulink url="http://www.exiv2.org/metadata.html"></ulink>
 * @class 
 */
class Metadata extends GObject.Object {

    // Own properties of GExiv2-0.10.GExiv2.Metadata

    static name: string

    // Constructors of GExiv2-0.10.GExiv2.Metadata

    constructor(config?: Metadata.ConstructorProperties) 
    constructor() 
    static new(): Metadata
    _init(config?: Metadata.ConstructorProperties): void
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag An Exiv2 tag
     * @returns The tag's description
     */
    static getTagDescription(tag: string | null): string | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag An Exiv2 tag
     * @returns The tag's label
     */
    static getTagLabel(tag: string | null): string | null
    /**
     * The names of the various Exiv2 tag types can be found at Exiv2::TypeId,
     * <ulink url="http://exiv2.org/doc/namespaceExiv2.html#a5153319711f35fe81cbc13f4b852450c"></ulink>
     * 
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag An Exiv2 tag
     * @returns The tag's type name.
     */
    static getTagType(tag: string | null): string | null
    static getXmpNamespaceForTag(tag: string | null): string | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag An Exiv2 tag
     * @returns TRUE if the Exiv2 tag is for the EXIF domain.
     */
    static isExifTag(tag: string | null): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag An Exiv2 tag
     * @returns TRUE if the Exiv2 tag is for the IPTC domain.
     */
    static isIptcTag(tag: string | null): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag An Exiv2 tag
     * @returns TRUE if the Exiv2 tag is for the XMP domain.
     */
    static isXmpTag(tag: string | null): boolean
    static registerXmpNamespace(name: string | null, prefix: string | null): boolean
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag An Exiv2 tag
     * @returns The tag's description
     */
    static tryGetTagDescription(tag: string | null): string | null
    /**
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag An Exiv2 tag
     * @returns The tag's label
     */
    static tryGetTagLabel(tag: string | null): string | null
    /**
     * The names of the various Exiv2 tag types can be found at Exiv2::TypeId,
     * <ulink url="http://exiv2.org/doc/namespaceExiv2.html#a5153319711f35fe81cbc13f4b852450c"></ulink>
     * 
     * The Exiv2 Tag Reference can be found at <ulink url="http://exiv2.org/metadata.html"></ulink>
     * @param tag An Exiv2 tag
     * @returns The tag's type name.
     */
    static tryGetTagType(tag: string | null): string | null
    static tryGetXmpNamespaceForTag(tag: string | null): string | null
    static tryRegisterXmpNamespace(name: string | null, prefix: string | null): boolean
    static tryUnregisterAllXmpNamespaces(): void
    static tryUnregisterXmpNamespace(name: string | null): boolean
    static unregisterAllXmpNamespaces(): void
    static unregisterXmpNamespace(name: string | null): boolean
}

module PreviewImage {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PreviewImage {

    // Own properties of GExiv2-0.10.GExiv2.PreviewImage

    __gtype__: number

    // Own fields of GExiv2-0.10.GExiv2.PreviewImage

    parentInstance: GObject.Object

    // Owm methods of GExiv2-0.10.GExiv2.PreviewImage

    /**
     * Releases the preview image and all associated memory.
     */
    free(): void
    getData(): Uint8Array

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    getData(key: string | null): any | null
    getExtension(): string | null
    getHeight(): number
    getMimeType(): string | null
    getWidth(): number
    tryWriteFile(path: string | null): number
    writeFile(path: string | null): number

    // Class property signals of GExiv2-0.10.GExiv2.PreviewImage

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

class PreviewImage extends GObject.Object {

    // Own properties of GExiv2-0.10.GExiv2.PreviewImage

    static name: string

    // Constructors of GExiv2-0.10.GExiv2.PreviewImage

    constructor(config?: PreviewImage.ConstructorProperties) 
    _init(config?: PreviewImage.ConstructorProperties): void
}

module PreviewProperties {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PreviewProperties {

    // Own properties of GExiv2-0.10.GExiv2.PreviewProperties

    __gtype__: number

    // Own fields of GExiv2-0.10.GExiv2.PreviewProperties

    parentInstance: GObject.Object

    // Owm methods of GExiv2-0.10.GExiv2.PreviewProperties

    getExtension(): string | null
    getHeight(): number
    getMimeType(): string | null
    getSize(): number
    getWidth(): number

    // Class property signals of GExiv2-0.10.GExiv2.PreviewProperties

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

class PreviewProperties extends GObject.Object {

    // Own properties of GExiv2-0.10.GExiv2.PreviewProperties

    static name: string

    // Constructors of GExiv2-0.10.GExiv2.PreviewProperties

    constructor(config?: PreviewProperties.ConstructorProperties) 
    _init(config?: PreviewProperties.ConstructorProperties): void
}

interface MetadataClass {

    // Own fields of GExiv2-0.10.GExiv2.MetadataClass

    parentClass: GObject.ObjectClass
}

abstract class MetadataClass {

    // Own properties of GExiv2-0.10.GExiv2.MetadataClass

    static name: string
}

interface MetadataPrivate {
}

class MetadataPrivate {

    // Own properties of GExiv2-0.10.GExiv2.MetadataPrivate

    static name: string
}

interface PreviewImageClass {

    // Own fields of GExiv2-0.10.GExiv2.PreviewImageClass

    parentClass: GObject.ObjectClass
}

abstract class PreviewImageClass {

    // Own properties of GExiv2-0.10.GExiv2.PreviewImageClass

    static name: string
}

interface PreviewImagePrivate {
}

class PreviewImagePrivate {

    // Own properties of GExiv2-0.10.GExiv2.PreviewImagePrivate

    static name: string
}

interface PreviewPropertiesClass {

    // Own fields of GExiv2-0.10.GExiv2.PreviewPropertiesClass

    parentClass: GObject.ObjectClass
}

abstract class PreviewPropertiesClass {

    // Own properties of GExiv2-0.10.GExiv2.PreviewPropertiesClass

    static name: string
}

interface PreviewPropertiesPrivate {
}

class PreviewPropertiesPrivate {

    // Own properties of GExiv2-0.10.GExiv2.PreviewPropertiesPrivate

    static name: string
}

}

export default GExiv2;